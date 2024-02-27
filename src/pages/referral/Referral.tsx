import * as api from '@/api'
import Button from '@/components/button/Button'
import { DateRangePicker } from '@/components/date-range-picker/DateRangePicker'
import Filter from '@/components/filter/Filter'
import { PageTitle } from '@/components/page-title/PageTitle'
import { SelectItem } from '@/components/select/Select'
import ReferralTable from '@/components/tables/referral-table/ReferralTable'
import { Input } from '@/components/ui/input'
import { CurrencyCode } from '@/gql/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import { useLoadingWithMinDisplayTime } from '@/hooks/useLoadingWithMinDisplayTime'
import { usePagination } from '@/hooks/usePagination'
import { useUserReferrals } from '@/hooks/useUserReferrals'
import {
  USER_SEARCH_PARAM,
  startOfMonth,
  startOfNextMonth,
} from '@/utils/constants'
import { SortingState } from '@tanstack/react-table'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useMutation } from 'urql'

type UserParams = {
  userId: string
}

const currencyOptions: SelectItem[] = [
  {
    value: '1',
    label: CurrencyCode.Rub,
    id: CurrencyCode.Rub,
    icon: 'Rub',
  },
  {
    value: '2',
    label: CurrencyCode.Usd,
    id: CurrencyCode.Usd,
    icon: 'Usd',
  },
]

const Referral = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userId } = useParams<UserParams>()

  const userIdNumber = Number(userId)

  const [title, setTitle] = useState<string[]>([])

  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfMonth,
    to: startOfNextMonth,
  })

  const [selectedCurrency, setSelectedCurrency] = useState<SelectItem | null>(
    currencyOptions[0],
  )

  const [sorting, setSorting] = useState<SortingState>([])

  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const { pagination, setPagination } = usePagination()

  const {
    userReferrals,
    canPrevUserReferrals,
    canNextUserReferrals,
    fetchUserReferrals,
  } = useUserReferrals({
    userId: userIdNumber,
    searchTerm: debounceSearchValue,
    pagination,
    sorting,
  })

  const [recalculateReferralsBalance, executeRecalculateReferralsBalance] =
    useMutation(api.referral.recalculateReferralsBalance)

  const isLoadingRecalculateReferralsBalance = useLoadingWithMinDisplayTime(
    recalculateReferralsBalance.fetching,
  )

  const [untieUser, executeUntieUser] = useMutation(api.referral.untieReferral)

  const handleBackToUser = () => {
    navigate(-1)
  }

  const handleUntieUser = (userId: number) => {
    executeUntieUser({ userId })
  }

  const handleChangeSearchValue = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value)
  }

  const handleSelectCurrency = (value: string) => {
    const findSelectedCurrency = currencyOptions.find(
      (currency) => currency.value === value,
    )

    if (findSelectedCurrency) {
      setSelectedCurrency(findSelectedCurrency)
    }
  }

  const handleRecalculateReferralsBalance = () => {
    executeRecalculateReferralsBalance({ userId: userIdNumber }).catch(
      console.log,
    )
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const user = searchParams.get(USER_SEARCH_PARAM)

    if (user) {
      setTitle([user, 'Refferals'])
    } else {
      navigate(-1)
    }
  }, [location.search, navigate])

  useEffect(() => {
    if (
      (untieUser.data && !untieUser.fetching) ||
      (recalculateReferralsBalance.data &&
        !recalculateReferralsBalance.fetching)
    ) {
      fetchUserReferrals({ requestPolicy: 'network-only' })
    }
  }, [untieUser, recalculateReferralsBalance, fetchUserReferrals])

  return (
    <>
      <PageTitle
        titles={title}
        backButtonOptions={{
          variant: 'secondary',
          size: 'sm',
          onClick: handleBackToUser,
        }}
        rightElement={<DateRangePicker date={date} setDate={setDate} />}
      />

      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Find ID, Username..."
          value={searchValue}
          onChange={handleChangeSearchValue}
          className="w-[320px]"
        />

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRecalculateReferralsBalance}
            disabled={
              isLoadingRecalculateReferralsBalance || !userReferrals.length
            }
            loading={isLoadingRecalculateReferralsBalance}
          >
            Recalculate
          </Button>
          <Filter
            value={selectedCurrency?.value}
            items={currencyOptions}
            onValueChange={handleSelectCurrency}
          />
        </div>
      </div>

      <ReferralTable
        data={userReferrals}
        selectedCurrency={selectedCurrency}
        canPrev={canPrevUserReferrals}
        canNext={canNextUserReferrals}
        pagination={pagination}
        sorting={sorting}
        setSorting={setSorting}
        setPagination={setPagination}
        onUntie={handleUntieUser}
      />
    </>
  )
}

export default Referral

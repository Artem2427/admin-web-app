import { DateRangePicker } from '@/components/date-range-picker/DateRangePicker'
import Dropdown, { DropdownItem } from '@/components/dropdown/Dropdown'
import PersonalInformationForm from '@/components/forms/personal-information-form/PersonalInformationForm'
import { Icon } from '@/components/icon/Icon'
import MetricsBlock from '@/components/metrics-block/MetricsBlock'
import { PageTitle } from '@/components/page-title/PageTitle'
import UserBonusesTable from '@/components/tables/user-bonuses-table/UserBonusesTable'
import UserHistoryWalletTable from '@/components/tables/user-history-wallet-table/UserHistoryWalletTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import UserActionsPanel from '@/components/user-actions-panel/UserActionsPanel'
import {
  CurrencyCode,
  LoyaltyType,
  TransactionStatus,
  UpdateUserDataDto,
  useAdminUpdateUserDataMutation,
  useGetPersonalInfoByUserQuery,
  useUserOverviewQuery,
} from '@/generated/graphql'
import { withPermission } from '@/hocs/withPermission'
import { useDebounce } from '@/hooks/useDebounce'
import { useMuteOrUnmuteUser } from '@/hooks/useMuteOrUnmuteUser'
import { usePagination } from '@/hooks/usePagination'
import { useEditUserBalance } from '@/hooks/useUpdateUserBalance'
import { useUserBlockUnblock } from '@/hooks/useUserBlockUnblock'
import { useUserBonuses } from '@/hooks/useUserBonuses'
import { useUserWalletHistory } from '@/hooks/useUserWalletHistory'
import { useUserWallets } from '@/hooks/useUserWallets'
import { MetricInfo } from '@/types/metric'
import {
  TAB_SEARCH_PARAM,
  UserOverviewKey,
  defaultBonusStatusOptions,
  defaultWalletStatusOptions,
  historyWalletTabs,
  startOfMonth,
  startOfNextMonth,
  userOverviewMetrics,
  userOverviewMetricsKeys,
} from '@/utils/constants'
import { countTotalAmount, formatCurrencyValue } from '@/utils/utils'
import { permissions } from '@vega/permissions'
import { BaseSyntheticEvent, FC, useEffect, useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

type UserParams = {
  userId: string
}

const User: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userId } = useParams<UserParams>()

  const userIdNumber = Number(userId)

  const [activeTab, setActiveTab] = useState<ValueOf<typeof historyWalletTabs>>(
    historyWalletTabs.deposits,
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfMonth,
    to: startOfNextMonth,
  })
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)

  const { pagination, setPagination } = usePagination()

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [walletStatusOptions, setWalletStatusOptions] = useState(
    defaultWalletStatusOptions,
  )
  const [bonusStatusOptions, setBonusStatusOptions] = useState(
    defaultBonusStatusOptions,
  )

  const { userWalletsList } = useUserWallets(userIdNumber, true)
  const { handleEditBalance } = useEditUserBalance(userIdNumber)

  const [userPersonalInfo, refetchUserPersonalInfo] =
    useGetPersonalInfoByUserQuery({
      variables: {
        userId: userIdNumber,
      },
      requestPolicy: 'network-only',
    })

  const { handleBanOrUnBanUser } = useUserBlockUnblock({
    userId: userIdNumber,
    isBanned: Boolean(userPersonalInfo.data?.getPersonalInfo?.isBlocked),
    onRefetch: refetchUserPersonalInfo,
  })

  const [updateUserData, executeUpdateUserData] =
    useAdminUpdateUserDataMutation()

  const filteredItems = useMemo(() => {
    return activeTab === historyWalletTabs.bonuses
      ? bonusStatusOptions
      : walletStatusOptions
  }, [activeTab, bonusStatusOptions, walletStatusOptions])

  const checkedWalletHistoryStatuses = useMemo(() => {
    return walletStatusOptions
      .filter((option) => option.type === 'checkbox' && option.checked)
      .map((option) => option.id) as TransactionStatus[]
  }, [walletStatusOptions])

  const checkedBonusStatuses = useMemo(() => {
    return bonusStatusOptions
      .filter((option) => option.type === 'checkbox' && option.checked)
      .map((option) => option.id) as LoyaltyType[]
  }, [bonusStatusOptions])

  const { userWalletHistory, canPrevWalletHistory, canNextWalletHistory } =
    useUserWalletHistory({
      activeTab,
      userIdNumber,
      pagination,
      debounceSearchValue,
      checkedWalletHistoryStatuses,
    })

  const { userBonuses, canPrevBonuses, canNextBonuses } = useUserBonuses({
    activeTab,
    pagination,
    userIdNumber,
    checkedBonusStatuses,
    debounceSearchValue,
  })

  const [userOverview] = useUserOverviewQuery({
    variables: {
      input: {
        userId: userIdNumber,
        from: date?.from,
        to: date?.to,
      },
    },
  })

  const metricCards: MetricInfo[] = useMemo(() => {
    if (userOverview.data && !userOverview.fetching) {
      return Object.keys(userOverviewMetricsKeys).map((key) => {
        const userOverviewKey = key as UserOverviewKey
        const metric = userOverview.data!.userOverview[userOverviewKey]
        return {
          ...userOverviewMetrics[userOverviewKey],
          value: Array.isArray(metric)
            ? countTotalAmount(
                CurrencyCode.Usd,
                metric.map((item) => ({
                  amountRub: item.balance?.amountRub,
                  amountUsd: item.balance?.amountUsd,
                })),
              )
            : metric,
          isArray: Array.isArray(metric),
          info: metric,
        }
      })
    }

    return []
  }, [userOverview])

  const { handleMuteOrUnmuteUser } = useMuteOrUnmuteUser({
    userId: Number(userId),
    isMuted: Boolean(userPersonalInfo.data?.getPersonalInfo?.endBlocking),
    onRefetch: refetchUserPersonalInfo,
  })

  const handleBackToUsersTable = () => {
    navigate('/users')
  }

  const handleUpdateUserPersonalInfo = (values: UpdateUserDataDto) => {
    executeUpdateUserData({ updateUserDataDto: values }).catch(console.log)
    refetchUserPersonalInfo()
  }

  const handleTabChange = (value: string) => {
    navigate({ search: `?${TAB_SEARCH_PARAM}=${value}` })
    setPagination({
      pageIndex: 0,
      pageSize: 10,
    })
    setSearchValue('')
    setActiveTab(value as keyof typeof historyWalletTabs)
  }

  const handleChangeSearchValue = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value)
  }

  const handleSelectItem = (item: DropdownItem) => {
    const isBonusTabOpen = activeTab === historyWalletTabs.bonuses

    const copyWalletStatusOptions = isBonusTabOpen
      ? [...bonusStatusOptions]
      : [...walletStatusOptions]

    const updatedItems = copyWalletStatusOptions.map((option) => ({
      ...option,
      checked:
        option.type === 'checkbox' &&
        (option.id === item.id) !== option.checked,
    }))

    if (isBonusTabOpen) {
      setBonusStatusOptions(updatedItems)
      return
    }

    setWalletStatusOptions(updatedItems)
  }

  const handleSelectMetric = (id: string) => {
    if (selectedCardId === id) {
      setSelectedCardId(null)
      return
    }

    setSelectedCardId(id)
  }

  const tabContent = (tab: ValueOf<typeof historyWalletTabs>) => {
    switch (tab) {
      case historyWalletTabs.deposits:
      case historyWalletTabs.withdrawals:
        return (
          <UserHistoryWalletTable
            data={userWalletHistory}
            canPrev={canPrevWalletHistory}
            canNext={canNextWalletHistory}
            pagination={pagination}
            setPagination={setPagination}
          />
        )
      case historyWalletTabs.bonuses:
        return (
          <UserBonusesTable
            data={userBonuses}
            canPrev={canPrevBonuses}
            canNext={canNextBonuses}
            pagination={pagination}
            setPagination={setPagination}
          />
        )
    }
  }

  useEffect(() => {
    if (updateUserData.error) {
      // TODO Handle error
      // toast.show(api.createToastError(error))
    }
  }, [updateUserData])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const tab = searchParams.get(TAB_SEARCH_PARAM)

    if (tab && tab in historyWalletTabs) {
      setActiveTab(tab as keyof typeof historyWalletTabs)
    }
  }, [location.search])

  return (
    <>
      <PageTitle
        titles={[userPersonalInfo.data?.getPersonalInfo?.username || '']}
        backButtonOptions={{
          variant: 'secondary',
          size: 'sm',
          onClick: handleBackToUsersTable,
        }}
      />
      {Boolean(userPersonalInfo.data) && (
        <UserActionsPanel
          userWallets={userWalletsList.map((userWallet) => ({
            ...userWallet,
            label: formatCurrencyValue(userWallet.balance ?? '0') || '',
          }))}
          userPersonalInfo={userPersonalInfo.data!.getPersonalInfo!}
          onMuteOrUnmute={handleMuteOrUnmuteUser}
          onBanOrUnBan={handleBanOrUnBanUser}
          onEditBalance={handleEditBalance}
        />
      )}

      <div
        className="relative bg-border h-px right-8 mt-[14px] mb-[22px]"
        style={{ width: 'calc(100vw + 64px)' }}
      />
      <h3 className="mb-8 text-lg font-semibold tracking-wide text-black">
        Personal information
      </h3>
      {userPersonalInfo.data && !userPersonalInfo.fetching && (
        <PersonalInformationForm
          userPersonalInfo={userPersonalInfo.data.getPersonalInfo!}
          onUpdatePersonalInfo={handleUpdateUserPersonalInfo}
        />
      )}

      <div className="mt-[25px] mb-[32px]">
        <DateRangePicker
          date={date}
          setDate={setDate}
          className="block mb-[13px]"
          align="start"
        />

        <MetricsBlock
          metrics={metricCards}
          selectedMetricId={selectedCardId}
          onSelect={handleSelectMetric}
        />
      </div>

      <h3 className="mb-2 text-lg font-semibold tracking-wide text-black">
        History wallet
      </h3>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-3 w-[486px]">
          <TabsTrigger value={historyWalletTabs.deposits}>Deposits</TabsTrigger>
          <TabsTrigger value={historyWalletTabs.withdrawals}>
            Withdrawals
          </TabsTrigger>
          <TabsTrigger value={historyWalletTabs.bonuses}>Bonuses</TabsTrigger>
        </TabsList>
        <div className="flex justify-between items-center mt-5 mb-4">
          <Input
            placeholder="Find for wallet, date..."
            value={searchValue}
            onChange={handleChangeSearchValue}
            className="w-[320px]"
          />
          <Dropdown
            open={isOpenDropdown}
            items={filteredItems}
            setOpen={setIsOpenDropdown}
            onItemSelect={handleSelectItem}
          >
            <Button variant="outline" size="sm">
              <Icon component="MixerHorizontal" className="mr-2" />
              View
            </Button>
          </Dropdown>
        </div>
        <TabsContent value={historyWalletTabs.deposits}>
          {tabContent(historyWalletTabs.deposits)}
        </TabsContent>
        <TabsContent value={historyWalletTabs.withdrawals}>
          {tabContent(historyWalletTabs.withdrawals)}
        </TabsContent>
        <TabsContent value={historyWalletTabs.bonuses}>
          {tabContent(historyWalletTabs.bonuses)}
        </TabsContent>
      </Tabs>
    </>
  )
}

export default withPermission(permissions.users.view)(User)

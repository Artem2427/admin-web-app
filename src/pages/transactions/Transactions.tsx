import Dropdown, { DropdownItem } from '@/components/dropdown/Dropdown'
import { Icon } from '@/components/icon/Icon'
import { PageTitle } from '@/components/page-title/PageTitle'
import TransactionsBonusesTable from '@/components/tables/transactions-bonuses-table/TransactionsBonusesTable'
import TransactionsHistoryTable from '@/components/tables/transactions-history-table/TransactionsHistoryTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoyaltyType, TransactionStatus } from '@/generated/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import { usePagination } from '@/hooks/usePagination'
import { useUserBonuses } from '@/hooks/useUserBonuses'
import { useUserWalletHistory } from '@/hooks/useUserWalletHistory'
import {
  HistoryWalletTabsType,
  defaultBonusStatusOptions,
  defaultWalletStatusOptions,
  historyWalletTabs,
} from '@/utils/constants'
import { BaseSyntheticEvent, FC, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Transactions: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [activeTab, setActiveTab] = useState<HistoryWalletTabsType>(
    historyWalletTabs.deposits,
  )
  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const { pagination, setPagination } = usePagination()

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [walletStatusOptions, setWalletStatusOptions] = useState(
    defaultWalletStatusOptions,
  )

  const [bonusStatusOptions, setBonusStatusOptions] = useState(
    defaultBonusStatusOptions,
  )

  const checkedStatuses = useMemo(() => {
    return walletStatusOptions
      .filter((option) => option.type === 'checkbox' && option.checked)
      .map((option) => option.id) as TransactionStatus[]
  }, [walletStatusOptions])

  const { userWalletHistory, canPrevWalletHistory, canNextWalletHistory } =
    useUserWalletHistory({
      activeTab,
      pagination,
      checkedWalletHistoryStatuses: checkedStatuses,
      debounceSearchValue,
    })

  const handleTabChange = (value: string) => {
    navigate({ search: `?tab=${value}` })
    setActiveTab(value as HistoryWalletTabsType)
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

  const checkedBonusStatuses = useMemo(() => {
    return bonusStatusOptions
      .filter((option) => option.type === 'checkbox' && option.checked)
      .map((option) => option.id) as LoyaltyType[]
  }, [bonusStatusOptions])

  const { userBonuses, canPrevBonuses, canNextBonuses } = useUserBonuses({
    activeTab,
    pagination,
    checkedBonusStatuses,
    debounceSearchValue,
  })

  const filteredItems = useMemo(() => {
    return activeTab === historyWalletTabs.bonuses
      ? bonusStatusOptions
      : walletStatusOptions
  }, [activeTab, bonusStatusOptions, walletStatusOptions])

  const tabContent = (tab: HistoryWalletTabsType) => {
    switch (tab) {
      case historyWalletTabs.deposits:
      case historyWalletTabs.withdrawals:
        return (
          <TransactionsHistoryTable
            data={userWalletHistory || []}
            canPrev={canPrevWalletHistory}
            canNext={canNextWalletHistory}
            pagination={pagination}
            setPagination={setPagination}
          />
        )
      case historyWalletTabs.bonuses:
        return (
          <TransactionsBonusesTable
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
    const searchParams = new URLSearchParams(location.search)
    const tab = searchParams.get('tab')

    if (tab && tab in historyWalletTabs) {
      setActiveTab(tab as HistoryWalletTabsType)
    }
  }, [location.search])

  return (
    <>
      <PageTitle titles={['Transactions']} />
      <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-5">
        <TabsList className="grid grid-cols-3 w-[486px]">
          <TabsTrigger value={historyWalletTabs.deposits}>Deposit</TabsTrigger>
          <TabsTrigger value={historyWalletTabs.withdrawals}>
            Withdrawals
          </TabsTrigger>
          <TabsTrigger value={historyWalletTabs.bonuses}>Bonuses</TabsTrigger>
        </TabsList>
        <div className="flex justify-between items-center mt-5 mb-4">
          <Input
            placeholder="Find for wallet, ID..."
            value={searchValue}
            onChange={handleChangeSearchValue}
            className="w-[320px] h-9"
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

export default Transactions

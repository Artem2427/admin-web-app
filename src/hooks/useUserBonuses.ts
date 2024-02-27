import * as api from '@/api'
import { LoyaltyType, TransactionLoyaltyProgramEntity } from '@/gql/graphql'
import { historyWalletTabs } from '@/utils/constants'
import { PaginationState } from '@tanstack/react-table'
import { useQuery } from 'urql'

type Args = {
  activeTab: string
  pagination: PaginationState
  checkedBonusStatuses: LoyaltyType[]
  debounceSearchValue: string
  userIdNumber?: number
}

type BonusHistoryResult = {
  userBonuses: TransactionLoyaltyProgramEntity[]
  canPrevBonuses: boolean
  canNextBonuses: boolean
}

export function useUserBonuses({
  activeTab,
  pagination,
  userIdNumber,
  checkedBonusStatuses,
  debounceSearchValue,
}: Args): BonusHistoryResult {
  const [userBonusesResult] = useQuery({
    query: api.user.userBonusHistory,
    pause: activeTab !== historyWalletTabs.bonuses,
    variables: {
      input: {
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
        userId: userIdNumber,
        type: checkedBonusStatuses.length ? checkedBonusStatuses : null,
        searchTerm: debounceSearchValue,
      },
    },
  })

  return {
    userBonuses:
      userBonusesResult?.data?.admin__loyaltyProgramTransactions.data || [],
    canPrevBonuses: Boolean(
      userBonusesResult?.data?.admin__loyaltyProgramTransactions.metadata.prev,
    ),
    canNextBonuses: Boolean(
      userBonusesResult?.data?.admin__loyaltyProgramTransactions.metadata.next,
    ),
  }
}

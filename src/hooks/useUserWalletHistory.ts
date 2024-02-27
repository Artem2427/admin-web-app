import * as api from '@/api'
import {
  TransactionPaymentEntity,
  TransactionStatus,
  TransactionType,
} from '@/gql/graphql'
import { historyWalletTabs } from '@/utils/constants'
import { PaginationState } from '@tanstack/react-table'
import { useQuery } from 'urql'

type Props = {
  activeTab: ValueOf<typeof historyWalletTabs>
  pagination: PaginationState
  userIdNumber?: number
  checkedWalletHistoryStatuses?: TransactionStatus[]
  debounceSearchValue: string
}

type WalletHistoryResult = {
  userWalletHistory: TransactionPaymentEntity[]
  canPrevWalletHistory: boolean
  canNextWalletHistory: boolean
}

export function useUserWalletHistory({
  activeTab,
  pagination,
  userIdNumber,
  checkedWalletHistoryStatuses,
  debounceSearchValue,
}: Props): WalletHistoryResult {
  const [userWalletHistoryResult] = useQuery({
    query: api.user.userWalletHistory,
    pause: activeTab === historyWalletTabs.bonuses,
    variables: {
      input: {
        paginationInput: {
          currentPage: pagination.pageIndex + 1,
          perPage: pagination.pageSize,
        },
        userId: userIdNumber,
        filter: {
          statuses: checkedWalletHistoryStatuses?.length
            ? checkedWalletHistoryStatuses
            : null,
          type:
            activeTab === historyWalletTabs.deposits
              ? TransactionType.Deposit
              : TransactionType.Withdrawal,
        },
        searchTerm: debounceSearchValue,
      },
    },
  })

  return {
    userWalletHistory:
      userWalletHistoryResult?.data?.userWalletHistory.data || [],
    canPrevWalletHistory: Boolean(
      userWalletHistoryResult?.data?.userWalletHistory.metadata.prev,
    ),
    canNextWalletHistory: Boolean(
      userWalletHistoryResult?.data?.userWalletHistory.metadata.next,
    ),
  }
}

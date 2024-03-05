import {
  ReferralUserEntity,
  SortEnum,
  useFindUserReferralsQuery,
} from '@/generated/graphql'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { UseQueryExecute } from 'urql'

type Props = {
  userId: number
  searchTerm: string
  pagination: PaginationState
  sorting: SortingState
}

type UserReferralsResult = {
  userReferrals: Omit<ReferralUserEntity, 'anonymity'>[]
  canPrevUserReferrals: boolean
  canNextUserReferrals: boolean
  fetchUserReferrals: UseQueryExecute
}

export function useUserReferrals({
  userId,
  searchTerm,
  pagination,
  sorting,
}: Props): UserReferralsResult {
  const [userReferralsResult, fetchUserReferrals] = useFindUserReferralsQuery({
    variables: {
      input: {
        userId,
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
        searchTerm: searchTerm ? searchTerm : null,
        sortMethod: sorting.length
          ? sorting[0].desc
            ? SortEnum.Desc
            : SortEnum.Asc
          : undefined,
      },
    },
  })

  return {
    userReferrals: userReferralsResult.data?.userReferrals.data || [],
    canPrevUserReferrals: Boolean(
      userReferralsResult.data?.userReferrals.metadata.prev,
    ),
    canNextUserReferrals: Boolean(
      userReferralsResult.data?.userReferrals.metadata.next,
    ),
    fetchUserReferrals,
  }
}

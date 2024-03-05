import { SortEnum, useAdminFindAllUsersQuery } from '@/generated/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import { usePagination } from '@/hooks/usePagination'
import { SortingState } from '@tanstack/react-table'
import { useState } from 'react'

export const useFetchUsers = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const { pagination, setPagination } = usePagination()

  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const [{ data, fetching, error }, refetchUsers] = useAdminFindAllUsersQuery({
    variables: {
      paginationInput: {
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
      },
      sort: sorting.length
        ? {
            sortMethod: sorting[0].desc ? SortEnum.Desc : SortEnum.Asc,
            value: sorting[0].id,
          }
        : undefined,
      search: debounceSearchValue,
    },
  })

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value)
  }

  return {
    users: data?.adminFindAll.data || [],
    canPrev: Boolean(data?.adminFindAll.metadata.prev),
    canNext: Boolean(data?.adminFindAll.metadata.next),
    pagination,
    setPagination,
    sorting,
    setSorting,
    searchValue,
    handleChangeSearchValue,
    refetchUsers,
    isFetching: fetching,
    error,
  }
}

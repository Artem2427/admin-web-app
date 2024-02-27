import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { UserInAdminEntity } from '@/gql/graphql'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'
import { UseQueryExecute } from 'urql'

import { prepareColumns } from './user-table-config'

type Props = {
  data: Omit<UserInAdminEntity, 'anonymity'>[]
  canPrev: boolean
  canNext: boolean
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  onRefetchUsers: UseQueryExecute
}

const UserTable: FC<Props> = ({
  data,
  canPrev,
  canNext,
  sorting,
  setSorting,
  pagination,
  setPagination,
  onRefetchUsers,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns({ onRefetchUsers })}
      canPrev={canPrev}
      canNext={canNext}
      defaultData={data}
      pagination={pagination}
      setPagination={setPagination}
      sorting={sorting}
      setSorting={setSorting}
      manualSorting={true}
      manualPagination={true}
    />
  ) : (
    <NotFound title="No users found" icon="PromoEmpty" />
  )
}

export default UserTable

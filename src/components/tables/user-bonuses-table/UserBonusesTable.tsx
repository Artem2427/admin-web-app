import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { TransactionLoyaltyProgramEntity } from '@/gql/graphql'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './user-bonuses-table-config'

type Props = {
  data: TransactionLoyaltyProgramEntity[]
  canPrev: boolean
  canNext: boolean
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}

const UserBonusesTable: FC<Props> = ({
  data,
  canPrev,
  canNext,
  sorting,
  setSorting,
  pagination,
  setPagination,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns()}
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
    <NotFound title="No results found" icon="PromoEmpty" />
  )
}

export default UserBonusesTable

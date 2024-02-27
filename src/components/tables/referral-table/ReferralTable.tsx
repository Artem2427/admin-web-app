import NotFound from '@/components/not-found/NotFound'
import { SelectItem } from '@/components/select/Select'
import { Table } from '@/components/table/Table'
import { ReferralUserEntity } from '@/gql/graphql'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './referral-table-config'

type Props = {
  data: Omit<ReferralUserEntity, 'anonymity'>[]
  selectedCurrency: SelectItem | null
  canPrev: boolean
  canNext: boolean
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  onUntie: (userId: number) => void
}

const ReferralTable: FC<Props> = ({
  data,
  canPrev,
  canNext,
  sorting,
  selectedCurrency,
  setSorting,
  pagination,
  setPagination,
  onUntie,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns({ selectedCurrency, onUntie })}
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
    <NotFound title="No referrals found" icon="PromoEmpty" />
  )
}

export default ReferralTable

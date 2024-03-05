import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { PromocodeFindAllQuery } from '@/generated/graphql'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './promocode-table-config'

export type Promocode = PromocodeFindAllQuery['promocodeFindAll']['data'][0]

type Props = {
  data: Promocode[]
  loading: boolean
  canPrev: boolean
  canNext: boolean
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  onDeletePromocode: (id: number) => void
  onEditPromocode: (promocode: Promocode) => void
  onCreatePromocode: () => void
}

const PromocodeTable: FC<Props> = ({
  data,
  canPrev,
  canNext,
  sorting,
  pagination,
  setSorting,
  setPagination,
  onDeletePromocode,
  onEditPromocode,
  onCreatePromocode,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns({ onDeletePromocode, onEditPromocode })}
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
    <NotFound
      title="Nothing found"
      description="No promo codes found. Create the first promo code below"
      icon="PromoEmpty"
      buttonProps={{ label: 'Create promocode', onClick: onCreatePromocode }}
    />
  )
}

export default PromocodeTable

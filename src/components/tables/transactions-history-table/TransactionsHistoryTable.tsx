import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { TransactionPaymentEntity, TransactionType } from '@/gql/graphql'
import { useCopy } from '@/hooks/useCopy'
import { PaginationState, SortingState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './transactions-history-table-config'

type Props = {
  data: TransactionPaymentEntity[]
  canPrev: boolean
  canNext: boolean
  sorting?: SortingState
  setSorting?: Dispatch<SetStateAction<SortingState>>
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}

const TransactionsHistoryTable: FC<Props> = ({
  data,
  canPrev,
  canNext,
  sorting,
  setSorting,
  pagination,
  setPagination,
}) => {
  const { isCopied, copyToClipboard } = useCopy()
  const isWithdrawal = data.every(
    (item) => item.type === TransactionType.Withdrawal,
  )

  return (
    <>
      {data.length ? (
        <Table
          columns={prepareColumns({ isWithdrawal, onCopy: copyToClipboard })}
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
      )}

      {isCopied && (
        <div className="fixed bottom-10 -translate-x-2/4 bg-secondary-light text-gray-text font-semibold text-xs leading-4 tracking-[0.24px] z-[10] p-[7px] rounded-[10px] left-1/2">
          Copied!
        </div>
      )}
    </>
  )
}

export default TransactionsHistoryTable

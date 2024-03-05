import SimpleCell from '@/components/table/cells/SimpleCell'
import {
  TransactionPaymentEntity,
  TransactionStatus,
} from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import AmountCell from '../user-history-wallet-table/cells/AmountCell'
import MethodCell from '../user-history-wallet-table/cells/MethodCell'
import StatusCell from '../user-history-wallet-table/cells/StatusCell'
import WalletCell from '../user-history-wallet-table/cells/WalletCell'
import WithdrawalActionsCell from './WithdrawalActionsCell'

export type ColumnsOptions = {
  isWithdrawal: boolean
  onCopy: (value: string) => void
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<TransactionPaymentEntity>[] => {
  const columns: ColumnDef<TransactionPaymentEntity>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>#{row.original.id}</SimpleCell>,
    },
    {
      accessorKey: 'user',
      header: 'User',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>{row.original.user.username}</SimpleCell>,
    },
    {
      accessorKey: 'createdAt',
      header: 'Date created',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>
          {dayjs(row.original.processedAt ?? row.original.createdAt).format(
            'DD.MM.YYYY HH:mm',
          )}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'method.title',
      header: 'Method',
      enableSorting: false,
      cell: ({ row }) => <MethodCell row={row} />,
    },
    {
      accessorKey: 'recipient',
      header: 'Wallet',
      enableSorting: false,
      cell: ({ row }) => <WalletCell row={row} onCopy={options.onCopy} />,
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      enableSorting: false,
      cell: ({ row }) => <AmountCell row={row} />,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableSorting: false,
      cell: ({ row }) => <StatusCell row={row} />,
    },
  ]

  if (options.isWithdrawal) {
    columns.push(
      {
        accessorKey: 'admin',
        header: 'Admin',
        enableSorting: false,
        cell: () => <SimpleCell>{EMPTY_VALUE}</SimpleCell>,
      },
      {
        id: 'actions',
        enableHiding: false,
        enableSorting: false,
        cell: ({ row }) => {
          return (
            <>
              {row.original.status === TransactionStatus.Reviewing && (
                <WithdrawalActionsCell transactionId={row.original.id} />
              )}
            </>
          )
        },
      },
    )
  }

  return columns
}

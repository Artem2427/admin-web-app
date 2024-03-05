import SimpleCell from '@/components/table/cells/SimpleCell'
import { TransactionPaymentEntity } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { capitalize } from '@/utils/utils'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import AmountCell from './cells/AmountCell'
import MethodCell from './cells/MethodCell'
import StatusCell from './cells/StatusCell'
import WalletCell from './cells/WalletCell'

export type ColumnsOptions = {
  isWithdrawal: boolean
  onCopy: (value: string) => void
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<TransactionPaymentEntity>[] => {
  return [
    {
      accessorKey: 'type',
      header: 'Action',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{capitalize(row.original.type)}</SimpleCell>
      ),
    },
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>#{row.original.id}</SimpleCell>,
    },
    {
      accessorKey: 'createdAt',
      header: 'Date',
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
    // TODO ask which field
    {
      accessorKey: 'admin',
      header: 'Admin',
      enableSorting: false,
      cell: () => <SimpleCell>{EMPTY_VALUE}</SimpleCell>,
    },
    // TODO add dropdown for withdrawal
    // {
    //   id: 'actions',
    //   enableHiding: false,
    //   enableSorting: false,
    //   cell: ({ row }) => (
    //     <UserActions
    //       userId={row.original.id}
    //       nickName={row.original.username ?? ''}
    //       isBanned={row.original.isBlocked}
    //       onRefetchUsers={options.onRefetchUsers}
    //     />
    //   ),
    // },
  ]
}

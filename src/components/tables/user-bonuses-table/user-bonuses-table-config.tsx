import SimpleCell from '@/components/table/cells/SimpleCell'
import { TransactionLoyaltyProgramEntity } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { capitalize } from '@/utils/utils'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import AmountCell from './cells/AmountCell'
import StatusCell from './cells/StatusCell'

export const prepareColumns =
  (): ColumnDef<TransactionLoyaltyProgramEntity>[] => {
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
            {dayjs(row.original.createdAt).format('DD.MM.YYYY HH:mm')}
          </SimpleCell>
        ),
      },
      {
        accessorKey: 'method.title',
        header: 'Method',
        enableSorting: false,
        cell: () => <SimpleCell>{EMPTY_VALUE}</SimpleCell>,
      },
      {
        accessorKey: 'recipient',
        header: 'Wallet',
        enableSorting: false,
        cell: () => <SimpleCell>{EMPTY_VALUE}</SimpleCell>,
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
      // TODO check which field
      {
        accessorKey: 'admin',
        header: 'Admin',
        enableSorting: false,
        cell: () => <SimpleCell>{EMPTY_VALUE}</SimpleCell>,
      },
    ]
  }

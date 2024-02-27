import SimpleCell from '@/components/table/cells/SimpleCell'
import { TransactionLoyaltyProgramEntity } from '@/gql/graphql'
import { capitalize } from '@/utils/utils'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import AmountCell from '../user-bonuses-table/cells/AmountCell'

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
        accessorKey: 'user',
        header: 'User',
        enableSorting: false,
        cell: ({ row }) => (
          <SimpleCell>{row.original.user.username}</SimpleCell>
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
        accessorKey: 'amount',
        header: 'Amount',
        enableSorting: false,
        cell: ({ row }) => <AmountCell row={row} />,
      },
    ]
  }

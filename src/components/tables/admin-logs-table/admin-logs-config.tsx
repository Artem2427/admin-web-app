import SimpleCell from '@/components/table/cells/SimpleCell'
import { AdminsLogsQuery } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

export const prepareColumns = (): ColumnDef<
  AdminsLogsQuery['adminLogs']['data'][0]
>[] => {
  return [
    {
      accessorKey: 'user.username',
      header: 'Admin',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.user.username || EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'createdAt',
      header: 'Date & time',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>
          {dayjs(row.original.createdAt).format('DD.MM.YYYY HH:mm')}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'message',
      header: 'Actions',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>{row.original.message}</SimpleCell>,
    },
  ]
}

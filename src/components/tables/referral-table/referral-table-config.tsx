import { SelectItem } from '@/components/select/Select'
import SimpleCell from '@/components/table/cells/SimpleCell'
import { ReferralUserEntity } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import ActionsCell from './cells/ActionsCell'
import IncomeCell from './cells/IncomeCell'

export type ColumnsOptions = {
  selectedCurrency: SelectItem | null
  onUntie: (userId: number) => void
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<Omit<ReferralUserEntity, 'anonymity'>>[] => {
  return [
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>{row.original.id}</SimpleCell>,
    },
    {
      accessorKey: 'createdAt',
      header: 'Sign Up Date',
      enableSorting: true,
      cell: ({ row }) => (
        <SimpleCell>
          {dayjs(row.original.createdAt).format('DD.MM.YYYY')}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'username',
      header: 'Username',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.username || EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'income',
      header: 'Income',
      enableSorting: false,
      cell: ({ row }) => (
        <IncomeCell row={row} selectedCurrency={options.selectedCurrency} />
      ),
    },
    {
      id: 'actions',
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => <ActionsCell onUntie={options.onUntie} row={row} />,
    },
  ]
}

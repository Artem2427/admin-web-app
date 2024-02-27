import SimpleCell from '@/components/table/cells/SimpleCell'
import { EMPTY_VALUE } from '@/utils/constants'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'

import { Promocode } from './PromocodeTable'
import ActionsCell from './cells/ActionsCell'
import ActivationsCell from './cells/ActivationsCell'
import AmountCell from './cells/AmountCell'

export type ColumnsOptions = {
  onDeletePromocode: (id: number) => void
  onEditPromocode: (promocode: Promocode) => void
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<Promocode>[] => {
  return [
    {
      accessorKey: 'createdAt',
      header: 'Data created',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>
          {dayjs(row.original.createdAt).format('DD.MM.YYYY')}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'promocodeName',
      header: 'Promocode',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>{row.original.promocodeName}</SimpleCell>,
    },
    {
      accessorKey: 'username',
      header: 'Promocode created',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>
          {row.original?.userPromocodeCreate?.username ?? EMPTY_VALUE}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      enableSorting: false,
      cell: ({ row }) => <AmountCell row={row} />,
    },
    {
      accessorKey: 'activatedCount',
      header: 'Activations',
      enableSorting: false,
      cell: ({ row }) => <ActivationsCell row={row} />,
    },
    {
      id: 'actions',
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => (
        <ActionsCell
          promocode={row.original}
          onDeletePromocode={options.onDeletePromocode}
          onEditPromocode={options.onEditPromocode}
        />
      ),
    },
  ]
}

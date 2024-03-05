import { MapAdminEntity } from '@/hooks/useAdmins'
import { ColumnDef } from '@tanstack/react-table'

import AccessCell from './cells/AccessCell'
import ActionsCell from './cells/ActionsCell'
import AdminCell from './cells/AdminCell'

export type ColumnsOptions = {
  onDeleteAdmin: (id: number) => void
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<MapAdminEntity>[] => {
  return [
    {
      accessorKey: 'email',
      header: 'Admin',
      enableSorting: false,
      cell: ({ row }) => <AdminCell row={row} />,
    },
    {
      accessorKey: 'overview',
      header: 'Overview',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.overview || {}} />
      ),
    },
    {
      accessorKey: 'users',
      header: 'Users',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.users || {}} />
      ),
    },
    {
      accessorKey: 'transactions',
      header: 'Transactions',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.transactions || {}} />
      ),
    },
    // {
    //   accessorKey: 'users',
    //   header: 'Users',
    //   enableSorting: false,
    //   cell: ({ row }) => <AdminCell row={row} />,
    // },
    {
      accessorKey: 'referrals',
      header: 'Referrals',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.referrals || {}} />
      ),
    },
    {
      accessorKey: 'promo',
      header: 'Promo',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.promo || {}} />
      ),
    },
    {
      accessorKey: 'admin-access',
      header: 'Admin access',
      enableSorting: false,
      cell: ({ row }) => (
        <AccessCell permission={row.original.permissions?.adminAccess || {}} />
      ),
    },

    {
      id: 'actions',
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => (
        <ActionsCell row={row} onDeleteAdmin={options.onDeleteAdmin} />
      ),
    },
  ]
}

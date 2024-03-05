import SimpleCell from '@/components/table/cells/SimpleCell'
import { UserInAdminEntity } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'
import { UseQueryExecute } from 'urql'

import ActionsCell from './cells/ActionsCell'
import BalanceCell from './cells/BalanceCell'
import BannedCell from './cells/BannedCell'

export type ColumnsOptions = {
  onRefetchUsers: UseQueryExecute
}

export const prepareColumns = (
  options: ColumnsOptions,
): ColumnDef<Omit<UserInAdminEntity, 'anonymity'>>[] => {
  return [
    {
      accessorKey: 'id',
      header: 'ID',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>#{row.original.id}</SimpleCell>,
    },
    {
      accessorKey: 'username',
      header: 'Nickname',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.username || EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'createdAt',
      header: () => 'Sign Up Date',
      cell: ({ row }) => (
        <SimpleCell>
          {dayjs(row.original.createdAt).format('DD.MM.YYYY')}
        </SimpleCell>
      ),
    },
    {
      accessorKey: 'authProvider',
      header: () => 'Sign Up Method',
      enableSorting: false,
      cell: ({ row }) => <SimpleCell>{row.original.authProvider}</SimpleCell>,
    },
    {
      accessorKey: 'socialId',
      header: () => 'Sign Up Data',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.socialId ?? EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.email ?? EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'referrals',
      header: 'Referrals',
      enableSorting: false,
      cell: ({ row }) => (
        <SimpleCell>{row.original.referrals ?? EMPTY_VALUE}</SimpleCell>
      ),
    },
    {
      accessorKey: 'totalBalance',
      header: 'Balance',
      cell: ({ row }) => <BalanceCell row={row} />,
    },
    {
      accessorKey: 'isBlocked',
      header: 'Banned',
      enableSorting: false,
      cell: ({ row }) => <BannedCell isBlocked={row.original.isBlocked} />,
    },
    {
      id: 'actions',
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }) => (
        <ActionsCell
          userId={row.original.id}
          nickName={row.original.username ?? ''}
          isBanned={row.original.isBlocked}
          onRefetchUsers={options.onRefetchUsers}
        />
      ),
    },
  ]
}

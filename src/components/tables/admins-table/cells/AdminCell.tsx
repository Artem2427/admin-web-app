import { MapAdminEntity } from '@/hooks/useAdmins'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<MapAdminEntity>
}

const AdminCell: FC<Props> = ({ row }) => {
  return (
    <div className="flex flex-col text-sm">
      <span className="font-medium text-text-primary">
        {row.original.username}
      </span>
      <span className="text-gray-text">{row.original.email}</span>
    </div>
  )
}

export default AdminCell

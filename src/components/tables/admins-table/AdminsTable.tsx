import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { MapAdminEntity } from '@/hooks/useAdmins'
import { PaginationState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './admins-table-config'

type Props = {
  data: MapAdminEntity[]
  canPrev: boolean
  canNext: boolean
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
  onDeleteAdmin: (id: number) => void
}

const AdminsTable: FC<Props> = ({
  data,
  canNext,
  canPrev,
  pagination,
  setPagination,
  onDeleteAdmin,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns({ onDeleteAdmin })}
      canPrev={canPrev}
      canNext={canNext}
      defaultData={data}
      pagination={pagination}
      setPagination={setPagination}
      manualPagination={true}
    />
  ) : (
    <NotFound title="No results found" icon="PromoEmpty" />
  )
}

export default AdminsTable

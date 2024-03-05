import NotFound from '@/components/not-found/NotFound'
import { Table } from '@/components/table/Table'
import { AdminsLogsQuery } from '@/generated/graphql'
import { PaginationState } from '@tanstack/react-table'
import { Dispatch, FC, SetStateAction } from 'react'

import { prepareColumns } from './admin-logs-config'

type Props = {
  data: AdminsLogsQuery['adminLogs']['data']
  canPrev: boolean
  canNext: boolean
  pagination?: PaginationState
  setPagination?: Dispatch<SetStateAction<PaginationState>>
}

const AdminLogsTable: FC<Props> = ({
  data,
  canNext,
  canPrev,
  pagination,
  setPagination,
}) => {
  return data.length ? (
    <Table
      columns={prepareColumns()}
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

export default AdminLogsTable

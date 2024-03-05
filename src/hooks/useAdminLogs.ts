import { AdminsLogsQuery, useAdminsLogsQuery } from '@/generated/graphql'
import { AdminAccessTab, adminAccessTabs } from '@/utils/constants'
import { PaginationState } from '@tanstack/react-table'

type Args = {
  activeTab: AdminAccessTab
  pagination: PaginationState
  debounceSearchValue: string
}

type AdminLogsResult = {
  adminLogs: AdminsLogsQuery['adminLogs']['data']
  canPrevAdminLogs: boolean
  canNextAdminLogs: boolean
}

export function useAdminLogs({
  activeTab,
  pagination,
  debounceSearchValue,
}: Args): AdminLogsResult {
  const [adminLogsResult] = useAdminsLogsQuery({
    pause: activeTab === adminAccessTabs.admins,
    variables: {
      paginationArgsDto: {
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
        filter: undefined, // TODO rewrite
        search: debounceSearchValue,
      },
    },
  })

  return {
    adminLogs: adminLogsResult.data?.adminLogs.data || [],
    canNextAdminLogs: Boolean(adminLogsResult.data?.adminLogs.metadata.next),
    canPrevAdminLogs: Boolean(adminLogsResult.data?.adminLogs.metadata.prev),
  }
}

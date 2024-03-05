import { DropdownItem } from '@/components/dropdown/Dropdown'
import { AdminsQuery, useAdminsQuery } from '@/generated/graphql'
import { AdminAccessTab, adminAccessTabs } from '@/utils/constants'
import { PaginationState } from '@tanstack/react-table'
import {
  defaultMaskOrder,
  fromPermissionMask,
  prettifyPermissions,
} from '@vega/permissions'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { UseQueryExecute } from 'urql'

type Args = {
  activeTab: AdminAccessTab
  pagination: PaginationState
  debounceSearchValue: string
}

export type MapAdminEntity = AdminsQuery['admins']['data'][0] & {
  permissions: ReturnType<typeof prettifyPermissions> | null
}

type AdminsResult = {
  admins: MapAdminEntity[]
  canPrevAdmins: boolean
  canNextAdmins: boolean
  adminsOptions: DropdownItem[]
  setAdminsOptions: Dispatch<SetStateAction<DropdownItem[]>>
  fetchAdmins: UseQueryExecute
}

export function useAdmins({
  activeTab,
  pagination,
  debounceSearchValue,
}: Args): AdminsResult {
  const [adminsOptions, setAdminsOptions] = useState<DropdownItem[]>([])

  const [adminsResult, fetchAdmins] = useAdminsQuery({
    pause: activeTab === adminAccessTabs.logs,
    variables: {
      paginationArgs: {
        currentPage: pagination.pageIndex + 1,
        perPage: pagination.pageSize,
        searchTerm: debounceSearchValue,
      },
    },
  })

  useEffect(() => {
    if (adminsResult.data && !adminsResult.fetching) {
      setAdminsOptions(
        adminsResult.data.admins.data.map((admin) => ({
          type: 'checkbox',
          checked: false,
          label: admin.username || String(admin.id),
          id: String(admin.id),
        })),
      )
    }
  }, [adminsResult])

  return {
    admins:
      adminsResult.data?.admins.data.map((admin) => ({
        ...admin,
        permissions: admin.adminRights
          ? prettifyPermissions(
              fromPermissionMask(
                admin.adminRights.accessMask,
                defaultMaskOrder,
              ),
            )
          : null,
      })) || [],
    canPrevAdmins: Boolean(adminsResult.data?.admins.metadata.prev),
    canNextAdmins: Boolean(adminsResult.data?.admins.metadata.next),
    adminsOptions,
    setAdminsOptions,
    fetchAdmins,
  }
}

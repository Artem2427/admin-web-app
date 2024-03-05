import Dropdown, { DropdownItem } from '@/components/dropdown/Dropdown'
import { Icon } from '@/components/icon/Icon'
import { PageTitle } from '@/components/page-title/PageTitle'
import AdminLogsTable from '@/components/tables/admin-logs-table/AdminLogsTable'
import AdminsTable from '@/components/tables/admins-table/AdminsTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRevokeAdminPermissionsMutation } from '@/generated/graphql'
import { withPermission } from '@/hocs/withPermission'
import { useAdminLogs } from '@/hooks/useAdminLogs'
import { useAdmins } from '@/hooks/useAdmins'
import { useDebounce } from '@/hooks/useDebounce'
import { usePagination } from '@/hooks/usePagination'
import {
  AdminAccessTab,
  TAB_SEARCH_PARAM,
  adminAccessTabs,
} from '@/utils/constants'
import { permissions } from '@vega/permissions'
import { BaseSyntheticEvent, FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminAccess: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<AdminAccessTab>(
    adminAccessTabs.admins,
  )

  const [searchValue, setSearchValue] = useState<string>('')
  const debounceSearchValue = useDebounce(searchValue)

  const { pagination, setPagination } = usePagination()

  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const { adminLogs, canNextAdminLogs, canPrevAdminLogs } = useAdminLogs({
    activeTab,
    debounceSearchValue,
    pagination,
  })

  const {
    admins,
    canNextAdmins,
    canPrevAdmins,
    adminsOptions,
    setAdminsOptions,
    fetchAdmins,
  } = useAdmins({
    activeTab,
    debounceSearchValue,
    pagination,
  })

  const [revokeAdmin, executeRevokeAdmin] = useRevokeAdminPermissionsMutation()

  const handleOpenAddAdminModal = () => {
    //TODO change
    console.log('open add admin modal')
  }

  const handleDeleteAdmin = (userId: number) => {
    executeRevokeAdmin({ userId }).catch(console.log)
  }

  const handleChangeSearchValue = (event: BaseSyntheticEvent) => {
    setSearchValue(event.target.value)
  }

  const handleSelectItem = (item: DropdownItem) => {
    const copyAdminsOptions = [...adminsOptions]
    const updatedItems = copyAdminsOptions.map((option) => ({
      ...option,
      checked:
        option.type === 'checkbox' &&
        (option.id === item.id) !== option.checked,
    }))

    setAdminsOptions(updatedItems)
  }

  const handleTabChange = (value: string) => {
    navigate({ search: `?${TAB_SEARCH_PARAM}=${value}` })
    setPagination({
      pageIndex: 0,
      pageSize: 10,
    })
    setSearchValue('')
    setActiveTab(value as AdminAccessTab)
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const tab = searchParams.get(TAB_SEARCH_PARAM)

    if (tab && tab in adminAccessTabs) {
      setActiveTab(tab as AdminAccessTab)
    }
  }, [location.search])

  useEffect(() => {
    const { data, error, fetching } = revokeAdmin

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess(`Promocode ${createPromocodeResult.data.promocodeCreate.promocodeName} was created successfully`))
      fetchAdmins({ requestPolicy: 'network-only' })
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [revokeAdmin, fetchAdmins])

  return (
    <>
      <PageTitle
        titles={['Admin access']}
        rightElement={
          <Button onClick={handleOpenAddAdminModal} size="lg">
            <Icon
              component="UserOutline"
              className="mr-[8px] h-[16px] w-[16px]"
            />
            Add admin
          </Button>
        }
      />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-4">
        <TabsList className="grid grid-cols-2 w-[332px]">
          <TabsTrigger value={adminAccessTabs.admins}>Admins</TabsTrigger>
          <TabsTrigger value={adminAccessTabs.logs}>Logs</TabsTrigger>
        </TabsList>

        <div className="flex justify-between items-center mt-5">
          <Input
            placeholder="Find for admin..."
            value={searchValue}
            onChange={handleChangeSearchValue}
            className="w-[320px]"
          />
          {activeTab === adminAccessTabs.logs && (
            <Dropdown
              open={isOpenDropdown}
              items={adminsOptions}
              setOpen={setIsOpenDropdown}
              onItemSelect={handleSelectItem}
            >
              <Button variant="outline" size="sm">
                <Icon component="MixerHorizontal" className="mr-2" />
                View
              </Button>
            </Dropdown>
          )}
        </div>

        <TabsContent value={adminAccessTabs.admins}>
          <AdminsTable
            data={admins}
            canPrev={canPrevAdmins}
            canNext={canNextAdmins}
            pagination={pagination}
            setPagination={setPagination}
            onDeleteAdmin={handleDeleteAdmin}
          />
        </TabsContent>
        <TabsContent value={adminAccessTabs.logs}>
          <AdminLogsTable
            data={adminLogs}
            canNext={canNextAdminLogs}
            canPrev={canPrevAdminLogs}
            pagination={pagination}
            setPagination={setPagination}
          />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default withPermission(permissions.adminAccess.view)(AdminAccess)

import { PageTitle } from '@/components/page-title/PageTitle'
import UserTable from '@/components/tables/user-table/UserTable'
import { Input } from '@/components/ui/input'
import { useFetchUsers } from '@/hooks/useFetchUsers'
import { FC } from 'react'

export const Users: FC = () => {
  const {
    users,
    canPrev,
    canNext,
    pagination,
    setPagination,
    sorting,
    setSorting,
    searchValue,
    handleChangeSearchValue,
    refetchUsers,
  } = useFetchUsers()

  return (
    <>
      <div className="flex flex-col space-y-6">
        <PageTitle titles={['Users']} />
        <div className="flex items-center py-4 justify-between">
          <Input
            placeholder="Find ID, Nickname or Email..."
            value={searchValue}
            onChange={handleChangeSearchValue}
            className="w-[320px]"
          />
        </div>
      </div>

      <UserTable
        data={users}
        canPrev={canPrev}
        canNext={canNext}
        pagination={pagination}
        setPagination={setPagination}
        sorting={sorting}
        setSorting={setSorting}
        onRefetchUsers={refetchUsers}
      />
    </>
  )
}

import AlertDialog from '@/components/alert-dialog/AlertDialog'
import Dropdown, { DropdownItem } from '@/components/dropdown/Dropdown'
import Logo from '@/components/logo/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useGetMeQuery, useLogOutMutation } from '@/generated/graphql'
import { authService } from '@/services/auth-service'
import { useUserStore } from '@/stores/useUserStore'
import { dropdownVariant } from '@/utils/common'
import { pagesNavigation } from '@/utils/constants'
import { cn, isUserHasPermission } from '@/utils/utils'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { FC, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const dropdownIds = {
  logout: 'logout',
  profile: 'profile',
}

const userDropdownOptions: DropdownItem[] = [
  {
    label: 'Profile',
    id: dropdownIds.profile,
    type: 'default',
  },
  {
    label: 'Logout',
    icon: 'LogOut',
    id: dropdownIds.logout,
    type: dropdownVariant.WithIcon,
    color: 'hsl(var(--destructive))',
  },
]

const Header: FC = () => {
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useUserStore((state) => [state.user, state.setUser])

  const isAuthorized = authService.isLoggedIn()

  const [logOutResult, executeLogOut] = useLogOutMutation()
  const [userInfo] = useGetMeQuery({
    pause: !isAuthorized,
  })

  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return location.pathname === href
    } else {
      return location.pathname.includes(href)
    }
  }

  const handleSelectItem = (item: DropdownItem) => {
    setIsOpenProfile(false)
    switch (item.id) {
      case dropdownIds.logout: {
        alertDialogTriggerRef.current?.click()
        break
      }
      case dropdownIds.profile: {
        navigate(`/users/${user?.id}`)
        break
      }
    }
  }

  const handleNavigateToHomePage = () => {
    navigate('/')
  }

  const handleConfirmLogout = () => {
    executeLogOut({}).catch(console.error)
  }

  useEffect(() => {
    const { error, data } = logOutResult

    if (error) {
      // TODO VEGA-413
      // toast.show(createToastError(error))
      return
    }

    if (data?.logout) {
      authService.logout()
      setUser(null)
      navigate('/login')
    }
  }, [logOutResult, navigate, setUser])

  useEffect(() => {
    if (userInfo.data && !userInfo.fetching) {
      setUser(userInfo.data.me)
    }
  }, [userInfo, setUser])

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="flex h-16 items-center px-4">
        <Logo
          className="w-[92px] mr-[24px] cursor-pointer"
          onClick={handleNavigateToHomePage}
        />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          {pagesNavigation.map((page) => (
            <Link
              key={page.key}
              to={page.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                {
                  ['text-primary']: isActiveLink(page.href),
                  ['pointer-events-none text-primary/40']: !isUserHasPermission(
                    page.permission,
                    user,
                  ),
                },
              )}
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Dropdown
            items={userDropdownOptions}
            open={isOpenProfile}
            setOpen={setIsOpenProfile}
            onItemSelect={handleSelectItem}
          >
            <Button
              variant="outline"
              role="combobox"
              className={cn('w-[200px] h-[40px] justify-between text-primary')}
            >
              <Avatar className="mr-2 h-5 w-5">
                <AvatarImage
                  src={user?.avatarLink ?? 'https://github.com/shadcn.png'}
                  alt="user"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              {user?.username ?? ' Alicia Koch'}
              <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </Dropdown>
        </div>
      </div>

      <AlertDialog
        title="Logout"
        triggerRef={alertDialogTriggerRef}
        description={<div>Are you sure you want to get out?</div>}
        confirmButtonProps={{
          label: 'Logout',
          variant: 'destructive',
          onClick: handleConfirmLogout,
        }}
      />
    </header>
  )
}

export default Header

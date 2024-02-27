import BanOrUnBanUserAlert from '@/components/alerts/ban-or-unban-user-alert/BanOrUnBanUserAlert'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { EditUserBalanceModal } from '@/components/modals'
import { TableCellActions } from '@/components/table-cell-actions/TableCellActions'
import { useEditUserBalance } from '@/hooks/useUpdateUserBalance'
import { useUserBlockUnblock } from '@/hooks/useUserBlockUnblock'
import { useUserWallets } from '@/hooks/useUserWallets'
import { FC, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseQueryExecute } from 'urql'

const modals = {
  edit: 'edit',
  ban: 'ban',
  profile: 'profile',
} as const

type ModalType = ValueOf<typeof modals>

const actions: DropdownItem[] = [
  { type: 'default', label: 'Profile', id: modals.profile },
  { type: 'default', label: ' Edit balance', id: modals.edit },
  { type: 'default', label: 'Ban', id: modals.ban },
]

type ActionButtonsProps = {
  userId: number
  nickName: string
  isBanned: boolean
  onRefetchUsers: UseQueryExecute
}

const ActionsCell: FC<ActionButtonsProps> = ({
  userId,
  nickName,
  isBanned,
  onRefetchUsers,
}) => {
  const navigate = useNavigate()
  const [openedModal, setOpenedModal] = useState<ModalType | null>(null)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const editBalanceTriggerRef = useRef<HTMLButtonElement>(null)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)

  const { handleBanOrUnBanUser } = useUserBlockUnblock({
    userId,
    isBanned,
    onRefetch: onRefetchUsers,
  })
  const { userWalletsList } = useUserWallets(userId, isOpenDropdown)
  const { handleEditBalance } = useEditUserBalance(userId, onRefetchUsers)

  const handleNavigateToProfile = (id: number) => {
    navigate(`/users/${id}`)
  }

  const handleOpenModal = (
    id: ModalType,
    trigger: React.RefObject<HTMLButtonElement>,
  ) => {
    trigger.current?.click()
    setOpenedModal(id)
    setIsOpenDropdown(false)
  }

  const handleSelectItem = (item: DropdownItem) => {
    switch (item.id) {
      case modals.edit:
        handleOpenModal(item.id, editBalanceTriggerRef)
        break
      case modals.ban:
        handleOpenModal(item.id, alertDialogTriggerRef)
        break
      case modals.profile:
        handleNavigateToProfile(userId)
        break
      default:
        console.log('Invalid item id')
    }
  }

  const createActions = () => {
    if (isBanned) {
      return actions.map((action) =>
        action.id === modals.ban
          ? { ...action, label: 'Unban' }
          : { ...action },
      )
    }

    return actions
  }

  return (
    <div className="text-right">
      <TableCellActions
        onItemSelect={handleSelectItem}
        items={createActions()}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />

      <EditUserBalanceModal
        open={openedModal === modals.edit}
        onOpenChange={() => setOpenedModal(null)}
        userWalletsList={userWalletsList}
        onEditBalance={handleEditBalance}
      />

      <BanOrUnBanUserAlert
        isBlocked={isBanned}
        triggerRef={alertDialogTriggerRef}
        username={nickName || 'User'}
        onBanOrUnBan={handleBanOrUnBanUser}
      />
    </div>
  )
}

export default ActionsCell

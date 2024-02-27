import { UserPersonalInfoEntity } from '@/gql/graphql'
import { Duration } from '@/gql/graphql'
import { UserWalletItem } from '@/types/user'
import { FC, useRef, useState } from 'react'

import BanOrUnBanUserAlert from '../alerts/ban-or-unban-user-alert/BanOrUnBanUserAlert'
import { EditUserBalancePayload } from '../forms/edit-user-balance-form/schema'
import UserActionsForm from '../forms/user-actions-form/UserActionsForm'
import { EditUserBalanceModal } from '../modals'

type Props = {
  userWallets: UserWalletItem[]
  userPersonalInfo: Omit<UserPersonalInfoEntity, 'anonymity'>
  onMuteOrUnmute: (muteTimeDuration: Duration) => void
  onBanOrUnBan: () => void
  onEditBalance: (values: EditUserBalancePayload) => void
}

const UserActionsPanel: FC<Props> = ({
  userWallets,
  userPersonalInfo,
  onMuteOrUnmute,
  onBanOrUnBan,
  onEditBalance,
}) => {
  const [isOpenEditBalanceModal, setIsOpenEditBalanceModal] = useState(false)
  const [selectedBalance, setSelectedBalance] = useState<number | null>(null)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)

  const handleOpenEditBalanceModal = () => {
    setIsOpenEditBalanceModal(true)
  }

  const handleEditBalance = (values: {
    currencyId: number
    amount: string
  }) => {
    onEditBalance(values)
    setIsOpenEditBalanceModal(false)
  }

  const handleBanOrUnBan = () => {
    alertDialogTriggerRef.current?.click()
  }

  const handleMuteOrUnmuteUser = (muteTimeDuration: Duration) => {
    onMuteOrUnmute(muteTimeDuration)
  }

  return (
    <>
      <UserActionsForm
        selectedBalance={selectedBalance}
        setSelectedBalance={setSelectedBalance}
        userWallets={userWallets}
        isBlocked={userPersonalInfo.isBlocked}
        endBlocking={userPersonalInfo.endBlocking}
        onOpenEditBalanceModal={handleOpenEditBalanceModal}
        onBanOrUnBan={handleBanOrUnBan}
        onMuteOrUnmute={handleMuteOrUnmuteUser}
      />

      <EditUserBalanceModal
        open={isOpenEditBalanceModal}
        onOpenChange={() => setIsOpenEditBalanceModal(false)}
        userWalletsList={userWallets
          .filter((userWallet) => userWallet.value === String(selectedBalance))
          .map((userWallet) => ({
            ...userWallet,
            label: userWallet.currency?.code || '',
          }))}
        onEditBalance={handleEditBalance}
      />

      <BanOrUnBanUserAlert
        isBlocked={userPersonalInfo.isBlocked}
        triggerRef={alertDialogTriggerRef}
        username={userPersonalInfo.username || 'User'}
        onBanOrUnBan={onBanOrUnBan}
      />
    </>
  )
}

export default UserActionsPanel

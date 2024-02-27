import Dialog from '@/components/dialog/Dialog'
import EditUserBalanceForm from '@/components/forms/edit-user-balance-form/EditUserBalanceForm'
import { UserWalletItem } from '@/types/user'
import { FC } from 'react'

type Props = {
  open: boolean
  onOpenChange: () => void
  userWalletsList: UserWalletItem[]
  onEditBalance: (values: { currencyId: number; amount: string }) => void
}

const EditUserBalanceModal: FC<Props> = ({
  open,
  onOpenChange,
  userWalletsList,
  onEditBalance,
}) => {
  return (
    <Dialog
      title="Edit balance"
      description="Changing the users balance"
      open={open}
      onOpenChange={onOpenChange}
    >
      <EditUserBalanceForm
        userWallets={userWalletsList}
        onEditBalance={onEditBalance}
      />
    </Dialog>
  )
}

export default EditUserBalanceModal

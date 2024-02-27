import Dialog from '@/components/dialog/Dialog'
import { FC } from 'react'

type Props = {
  open: boolean
  onOpenChange: () => void
}

const AutoWithdrawalModal: FC<Props> = ({ open, onOpenChange }) => {
  return (
    <Dialog
      title="Payment system"
      description="Select a payment system for automatic withdrawal"
      open={open}
      onOpenChange={onOpenChange}
    >
      TODO - implement in task 266
    </Dialog>
  )
}

export default AutoWithdrawalModal

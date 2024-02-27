import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { FC, RefObject } from 'react'

type Props = {
  triggerRef: RefObject<HTMLButtonElement>
  onRejectTransaction: (transactionId: string) => void
  transactionId: string
}

const RejectTransactionAlert: FC<Props> = ({
  triggerRef,
  onRejectTransaction,
  transactionId,
}) => {
  return (
    <AlertDialog
      title="Cancellation of the transaction"
      triggerRef={triggerRef}
      description={<div>Are you sure you want to cancel transaction?</div>}
      confirmButtonProps={{
        label: 'Confirm',
        variant: 'destructive',
        onClick: () => onRejectTransaction(transactionId),
      }}
    />
  )
}

export default RejectTransactionAlert

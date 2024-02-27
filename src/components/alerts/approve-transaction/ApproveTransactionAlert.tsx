import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { FC, RefObject } from 'react'

type Props = {
  triggerRef: RefObject<HTMLButtonElement>
  onApproveTransaction: (transactionId: string) => void
  transactionId: string
}

const ApproveTransactionAlert: FC<Props> = ({
  triggerRef,
  onApproveTransaction,
  transactionId,
}) => {
  return (
    <AlertDialog
      title="Confirmation"
      triggerRef={triggerRef}
      description={<div>Do you confirm the withdrawal of funds??</div>}
      confirmButtonProps={{
        label: 'Confirm',
        variant: 'default',
        onClick: () => onApproveTransaction(transactionId),
      }}
    />
  )
}

export default ApproveTransactionAlert

import * as api from '@/api'
import RejectTransactionAlert from '@/components/alerts/reject-transaction/RejectTransactionAlert'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { TableCellActions } from '@/components/table-cell-actions/TableCellActions'
import { FC, useEffect, useRef, useState } from 'react'
import { useMutation } from 'urql'

import ApproveTransactionAlert from '../../alerts/approve-transaction/ApproveTransactionAlert'
import AutoWithdrawalModal from '../../modals/auto-withdrawal/AutoWithdrawalModal'

const modals = {
  approve: 'approve',
  reject: 'reject',
  auto: 'auto-output',
} as const

type ModalType = ValueOf<typeof modals>

const actions: DropdownItem[] = [
  {
    type: 'default',
    label: 'Confirm',
    id: modals.approve,
  },
  { type: 'default', label: 'Auto-output', id: modals.auto },
  {
    type: 'default',
    label: 'Reject',
    id: modals.reject,
    color: 'rgba(239, 68, 68, 1)',
  },
]

type Props = {
  transactionId: string
}

const WithdrawalActionsCell: FC<Props> = ({ transactionId }) => {
  const [openedModal, setOpenedModal] = useState<ModalType | null>(null)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const approveAlertTriggerRef = useRef<HTMLButtonElement>(null)
  const rejectAlertTriggerRef = useRef<HTMLButtonElement>(null)
  const autoOutputTriggerRef = useRef<HTMLButtonElement>(null)

  const [rejectTransactionResult, executeRejectTransaction] = useMutation(
    api.transactions.rejectTransaction,
  )

  const [approveTransactionResult, executeApproveTransaction] = useMutation(
    api.transactions.approveTransaction,
  )

  const handleRejectTransaction = (transactionId: string) => {
    executeRejectTransaction({
      rejectInput: {
        id: transactionId,
      },
    })
  }

  const handleApproveTransaction = (transactionId: string) => {
    executeApproveTransaction({
      approveManuallyInput: {
        id: transactionId,
      },
    })
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
      case modals.approve:
        handleOpenModal(item.id, approveAlertTriggerRef)
        break
      case modals.reject:
        handleOpenModal(item.id, rejectAlertTriggerRef)
        break
      case modals.auto:
        handleOpenModal(item.id, autoOutputTriggerRef)
        break
      default:
        console.log('Invalid item id')
    }
  }

  useEffect(() => {
    const { data, error, fetching } = rejectTransactionResult

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess('Transaction was rejected successfully'))
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [rejectTransactionResult])

  useEffect(() => {
    const { data, error, fetching } = approveTransactionResult

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess('Transaction was rejected successfully'))
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [approveTransactionResult])

  return (
    <div className="text-right">
      <TableCellActions
        onItemSelect={handleSelectItem}
        items={actions}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />

      <ApproveTransactionAlert
        triggerRef={approveAlertTriggerRef}
        onApproveTransaction={handleApproveTransaction}
        transactionId={transactionId}
      />

      <AutoWithdrawalModal
        open={openedModal === modals.auto}
        onOpenChange={() => setOpenedModal(null)}
      />

      <RejectTransactionAlert
        triggerRef={rejectAlertTriggerRef}
        onRejectTransaction={handleRejectTransaction}
        transactionId={transactionId}
      />
    </div>
  )
}

export default WithdrawalActionsCell

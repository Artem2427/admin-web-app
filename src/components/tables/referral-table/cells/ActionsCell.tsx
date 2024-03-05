import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { TableCellActions } from '@/components/table-cell-actions/TableCellActions'
import { ReferralUserEntity } from '@/generated/graphql'
import { Row } from '@tanstack/react-table'
import { FC, useRef, useState } from 'react'

const actionIds = {
  untie: 'untie',
} as const

const actions: DropdownItem[] = [
  {
    type: 'default',
    label: 'Untie',
    id: actionIds.untie,
    color: 'hsl(var(--destructive))',
  },
]

type Props = {
  row: Row<Omit<ReferralUserEntity, 'anonymity'>>
  onUntie: (userId: number) => void
}

const ActionsCell: FC<Props> = ({ row, onUntie }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)

  const handleSelectItem = (item: DropdownItem) => {
    switch (item.id) {
      case actionIds.untie:
        alertDialogTriggerRef.current?.click()
        setIsOpenDropdown(false)
        break
      default:
        console.log('Invalid item id')
    }
  }

  return (
    <div className="text-right">
      <TableCellActions
        onItemSelect={handleSelectItem}
        items={actions}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />
      <AlertDialog
        title="Confirmation"
        triggerRef={alertDialogTriggerRef}
        description={
          <div>
            Are you sure you want to untie the referral
            <span className="font-bold text-slate-900 ml-1">
              {row.original.username}
            </span>
            ?
          </div>
        }
        confirmButtonProps={{
          label: 'Delete',
          variant: 'destructive',
          onClick: () => onUntie(row.original.id),
        }}
      />
    </div>
  )
}

export default ActionsCell

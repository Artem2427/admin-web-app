import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { TableCellActions } from '@/components/table-cell-actions/TableCellActions'
import { MapAdminEntity } from '@/hooks/useAdmins'
import { adminTableActions } from '@/utils/constants'
import { Row } from '@tanstack/react-table'
import { FC, useRef, useState } from 'react'

const actionsList: DropdownItem[] = [
  { type: 'default', label: 'Edit', id: adminTableActions.edit },
  {
    type: 'default',
    label: 'Delete',
    id: adminTableActions.delete,
    color: 'hsl(var(--destructive))',
  },
]

type Props = {
  row: Row<MapAdminEntity>
  onDeleteAdmin: (id: number) => void
}

const ActionsCell: FC<Props> = ({ row, onDeleteAdmin }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)

  const handleOpenModal = (trigger: React.RefObject<HTMLButtonElement>) => {
    trigger.current?.click()
    setIsOpenDropdown(false)
  }

  const handleSelectItem = (item: DropdownItem) => {
    switch (item.id) {
      case adminTableActions.edit:
        break
      case adminTableActions.delete:
        handleOpenModal(alertDialogTriggerRef)
        break
      default:
        console.log('Invalid item id')
    }
  }

  return (
    <div className="text-right">
      <TableCellActions
        items={actionsList}
        onItemSelect={handleSelectItem}
        isOpenDropdown={isOpenDropdown}
        setIsOpenDropdown={setIsOpenDropdown}
      />

      <AlertDialog
        title="Confirmation"
        triggerRef={alertDialogTriggerRef}
        description={
          <div>
            Do you really want to revoke admin
            <span className="font-bold text-slate-900 ml-1">
              {row.original.username}
            </span>
            ?
          </div>
        }
        confirmButtonProps={{
          label: 'Delete',
          variant: 'destructive',
          onClick: () => onDeleteAdmin(row.original.id),
        }}
      />
    </div>
  )
}

export default ActionsCell

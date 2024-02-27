import AlertDialog from '@/components/alert-dialog/AlertDialog'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { TableCellActions } from '@/components/table-cell-actions/TableCellActions'
import { promocodeTableActions } from '@/types/promocode'
import { FC, useRef, useState } from 'react'

import { Promocode } from '../PromocodeTable'

const actionsList: DropdownItem[] = [
  { type: 'default', label: 'Edit', id: promocodeTableActions.edit },
  {
    type: 'default',
    label: 'Delete',
    id: promocodeTableActions.delete,
    color: 'hsl(var(--destructive))',
  },
]

type Props = {
  promocode: Promocode
  onDeletePromocode: (id: number) => void
  onEditPromocode: (promocode: Promocode) => void
}

const ActionsCell: FC<Props> = ({
  onDeletePromocode,
  onEditPromocode,
  promocode,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const alertDialogTriggerRef = useRef<HTMLButtonElement>(null)

  const handleOpenModal = (trigger: React.RefObject<HTMLButtonElement>) => {
    trigger.current?.click()
    setIsOpenDropdown(false)
  }

  const handleSelectItem = (item: DropdownItem) => {
    switch (item.id) {
      case promocodeTableActions.edit:
        onEditPromocode(promocode)
        break
      case promocodeTableActions.delete:
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
            Do you really want to delete promo code
            <span className="font-bold text-slate-900 ml-1">
              {promocode.promocodeName}
            </span>
            ?
          </div>
        }
        confirmButtonProps={{
          label: 'Delete',
          variant: 'destructive',
          onClick: () => onDeletePromocode(promocode.id),
        }}
      />
    </div>
  )
}

export default ActionsCell

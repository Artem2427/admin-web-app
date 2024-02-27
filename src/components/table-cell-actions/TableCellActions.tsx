import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { FC } from 'react'

import Dropdown, { DropdownItem } from '../dropdown/Dropdown'
import { Button } from '../ui/button'

type Props = {
  items: DropdownItem[]
  onItemSelect: (item: DropdownItem) => void
  isOpenDropdown: boolean
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

export const TableCellActions: FC<Props> = ({
  items,
  onItemSelect,
  isOpenDropdown,
  setIsOpenDropdown,
}) => {
  return (
    <Dropdown
      open={isOpenDropdown}
      items={items}
      setOpen={setIsOpenDropdown}
      onItemSelect={onItemSelect}
    >
      <Button variant="ghost" className="h-8 w-8 p-0">
        <DotsHorizontalIcon className="h-4 w-4" />
      </Button>
    </Dropdown>
  )
}

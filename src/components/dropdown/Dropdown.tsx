import { Icons } from '@/assets'
import { dropdownVariant } from '@/utils/common'
import { FC, PropsWithChildren, useCallback } from 'react'

import { Icon } from '../icon/Icon'
import * as BaseDropdown from '../ui/dropdown-menu'

type BaseDropdownItem = {
  type: ValueOf<typeof dropdownVariant>
  label: string
  id: string
}

interface DefaultItem extends BaseDropdownItem {
  type: 'default'
  color?: string
}

interface ItemWithIcon extends BaseDropdownItem {
  type: 'withIcon'
  icon: keyof typeof Icons
  color?: string
  iconColor?: string
}

interface CheckboxItem extends BaseDropdownItem {
  type: 'checkbox'
  checked: boolean
  disabled?: boolean
}

export type DropdownItem = DefaultItem | ItemWithIcon | CheckboxItem

export type DropdownProps = {
  items: DropdownItem[]
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onItemSelect: (item: DropdownItem) => void
  align?: 'center' | 'end' | 'start'
}

const {
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
} = BaseDropdown

const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  open,
  items,
  children,
  setOpen,
  onItemSelect,
  align = 'end',
}) => {
  const handleSelect = useCallback(
    (selectedItem: DropdownItem): void => {
      onItemSelect(selectedItem)
    },
    [onItemSelect],
  )

  const renderItem = (item: DropdownItem) => {
    switch (item.type) {
      case dropdownVariant.Default:
        return (
          <DropdownMenuItem
            key={item.id}
            style={{ color: item.color }}
            onSelect={() => handleSelect(item)}
            className="cursor-pointer"
          >
            {item.label}
          </DropdownMenuItem>
        )
      case dropdownVariant.WithIcon:
        return (
          <DropdownMenuItem
            key={item.id}
            style={{ color: item.color }}
            className="cursor-pointer"
            onSelect={() => handleSelect(item)}
          >
            {item.icon && (
              <Icon
                component={item.icon}
                className="w-[16px] h-[16px]] mr-[8px]"
                style={{ color: item.iconColor }}
              />
            )}
            {item.label}
          </DropdownMenuItem>
        )
      case dropdownVariant.Checkbox:
        return (
          <DropdownMenuCheckboxItem
            key={item.id}
            id={item.id}
            className="cursor-pointer"
            disabled={item.disabled}
            checked={item.checked}
            onSelect={() => handleSelect(item)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        )
      default:
        return null
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent forceMount hideWhenDetached align={align}>
          {items.map((item) => renderItem(item))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default Dropdown

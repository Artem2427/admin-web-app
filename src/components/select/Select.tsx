import { Icons } from '@/assets'
import { IconComponent } from '@/services/helper-service'
import { useCallback, useState } from 'react'

import { Icon } from '../icon/Icon'
import {
  Select as CustomSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export type SelectItem = {
  value: string
  label: string
  id: string
  icon?: IconComponent
}

export type SelectProps<T extends SelectItem> = {
  name?: string
  value?: string
  placeholder?: string
  items: T[]
  align?: 'center' | 'end' | 'start'
  fullWidth?: boolean
  classNames?: string
  onValueChange?: (item: string) => void
}

export const Select = <T extends SelectItem>({
  name,
  value,
  placeholder,
  items,
  classNames,
  align = 'start',
  fullWidth = false,
  onValueChange,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <CustomSelect
      value={value || ''}
      open={isOpen}
      onOpenChange={handleOpen}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm h-9 gap-2 ${
          fullWidth ? 'w-full' : 'w-auto'
        } ${classNames}`}
        style={{ borderColor: 'hsl(var(--input))' }}
        id={name}
        onClick={handleOpen}
      >
        <div
          className="flex justify-start items-center gap-[6px]"
          style={{
            color: !value ? 'hsl(215.38deg 16.32% 46.86%)' : 'inherit',
          }}
        >
          <SelectValue
            placeholder={value !== undefined ? value : placeholder}
          />
        </div>
      </SelectTrigger>
      <SelectContent align={align} className="max-h-[164px]">
        <SelectGroup>
          {items.map((item) => (
            <SelectItem
              value={item.value}
              key={item.id}
              className="hover:cursor-pointer"
            >
              <div className="flex justify-start items-center gap-[6px]">
                {item.icon && item.icon in Icons && (
                  <Icon component={item.icon} className="w-4 h-4" />
                )}
                <span>{item.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </CustomSelect>
  )
}

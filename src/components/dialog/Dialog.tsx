import { FC, PropsWithChildren } from 'react'

import {
  Dialog as CustomDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

type DialogProps = {
  title: string
  description?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  triggerRef?: React.RefObject<HTMLButtonElement>
}

const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  children, // Add content + action buttons
  open,
  title,
  description,
  onOpenChange,
}) => {
  return (
    <CustomDialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[462px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
      </DialogContent>
    </CustomDialog>
  )
}

export default Dialog

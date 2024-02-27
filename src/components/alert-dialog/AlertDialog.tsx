import { FC, ReactNode } from 'react'

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as CustomAlertDialog,
} from '../ui/alert-dialog'
import { ButtonProps } from '../ui/button'
import AlertActionContent from './AlertActionContent'

type ActionButton = ButtonProps & {
  label?: string
  loading?: boolean
}

type AlertDialogProps = {
  title: string
  description: ReactNode | string
  cancelButtonProps?: ActionButton
  confirmButtonProps?: ActionButton
  triggerRef?: React.RefObject<HTMLButtonElement>
}

const AlertDialog: FC<AlertDialogProps> = ({
  title,
  triggerRef,
  description,
  cancelButtonProps = {},
  confirmButtonProps = {},
}) => {
  const { label: cancelLabel, ...cancelProps } = cancelButtonProps
  const { label: confirmLabel, loading, ...confirmProps } = confirmButtonProps

  return (
    <CustomAlertDialog>
      <AlertDialogTrigger ref={triggerRef} className="hidden">
        Trigger
      </AlertDialogTrigger>
      <AlertDialogContent forceMount>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription asChild>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            {...cancelProps}
            className="focus-visible:shadow-none"
          >
            {cancelLabel ? cancelLabel : 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction {...confirmProps}>
            <AlertActionContent loading={loading} confirmLabel={confirmLabel} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </CustomAlertDialog>
  )
}

export default AlertDialog

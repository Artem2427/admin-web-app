import Dialog from '@/components/dialog/Dialog'
import CreatePromocodeForm from '@/components/forms/create-promocode-form/CreatePromocodeForm'
import { SelectItem } from '@/components/select/Select'
import { CreatePromocodeProps, EditPromocodeProps } from '@/types/promocode'
import { Dispatch, FC, SetStateAction } from 'react'

type BaseProps = {
  title: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  currencies: SelectItem[]
}

type ManagePromocodeModalProps = BaseProps &
  (CreatePromocodeProps | EditPromocodeProps)

const ManagePromocodeModal: FC<ManagePromocodeModalProps> = ({
  title,
  currencies,
  open,
  setOpen,
  ...props
}) => {
  return (
    <Dialog
      title={title}
      open={open}
      onOpenChange={setOpen}
      description="Specify the promo code, the amount of use and the bonus"
    >
      <CreatePromocodeForm
        currencies={currencies}
        onCloseModal={() => setOpen(false)}
        {...props}
      />
    </Dialog>
  )
}

export default ManagePromocodeModal

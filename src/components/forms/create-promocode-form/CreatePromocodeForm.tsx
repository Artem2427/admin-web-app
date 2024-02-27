import Button from '@/components/button/Button'
import { Select, SelectItem } from '@/components/select/Select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  CreatePromocodeProps,
  EditPromocodeProps,
  promocodeTableActions,
} from '@/types/promocode'
import {
  formatCurrencyValue,
  removeCommasAndConvertToNumber,
} from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { PromocodePayload, promocodeFormSchema } from './schema'

type BaseProps = {
  currencies: SelectItem[]
  onCloseModal: () => void
}

type ManagePromocodeFormProps = BaseProps &
  (CreatePromocodeProps | EditPromocodeProps)

const CreatePromocodeForm: FC<ManagePromocodeFormProps> = ({
  currencies,
  onCloseModal,
  ...props
}) => {
  const promocodeForm = useForm<PromocodePayload>({
    resolver: zodResolver(promocodeFormSchema),
    defaultValues: useMemo(() => {
      if (props.action === promocodeTableActions.edit) {
        return {
          promocodeName: props.promocode?.promocodeName,
          activated: String(props.promocode?.activated),
          currencyId: String(props.promocode?.currencyId),
          amount: String(props.promocode?.amount),
        }
      }

      return {
        promocodeName: '',
        activated: '',
        currencyId: '',
        amount: '',
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.action]),
  })

  const onSubmit = (values: PromocodePayload) => {
    if (props.action === promocodeTableActions.create) {
      props.onCreatePromocode({
        ...values,
        activated: Number(values.activated),
        amount: Number(removeCommasAndConvertToNumber(values.amount)),
        currencyId: Number(values.currencyId),
      })
    } else {
      props.onEditPromocode({
        ...values,
        activated: Number(values.activated),
        amount: Number(removeCommasAndConvertToNumber(values.amount)),
        currencyId: Number(values.currencyId),
        id: props.promocode!.id,
      })
    }

    onCloseModal()
  }

  const handleChangeCurrency = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrencyValue(event.target.value)

    if (formattedValue !== null) {
      promocodeForm.setValue('amount', formattedValue)
    }
  }

  return (
    <Form {...promocodeForm}>
      <form
        onSubmit={promocodeForm.handleSubmit(onSubmit)}
        className="flex gap-y-4 flex-col"
      >
        <FormField
          control={promocodeForm.control}
          name="promocodeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Promocode</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter promocode name"
                  className="h-10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={promocodeForm.control}
          name="activated"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activated</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Type the amount"
                  type="number"
                  className="h-10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={promocodeForm.control}
          name="currencyId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select
                value={field.value}
                items={currencies}
                fullWidth
                classNames="h-10"
                placeholder="Select currency"
                onValueChange={field.onChange}
              />
            </FormItem>
          )}
        />
        <FormField
          control={promocodeForm.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={handleChangeCurrency}
                  className="h-10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-auto" size="sm">
          {props.action === promocodeTableActions.edit ? 'Edit ' : 'Create '}
          promocode
        </Button>
      </form>
    </Form>
  )
}

export default CreatePromocodeForm

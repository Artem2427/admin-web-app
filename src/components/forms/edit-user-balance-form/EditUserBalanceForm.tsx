import Button from '@/components/button/Button'
import { Select } from '@/components/select/Select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEditUserBalanceForm } from '@/hooks/useEditUserBalanceForm'
import { UserWalletItem } from '@/types/user'
import { FC } from 'react'

import { EditUserBalancePayload } from './schema'

type Props = {
  userWallets: UserWalletItem[]
  onEditBalance: (values: EditUserBalancePayload) => void
}

const EditUserBalanceForm: FC<Props> = ({ userWallets, onEditBalance }) => {
  const {
    formEditBalance,
    handleEditBalance,
    handleChangeBalance,
    handleSelectUserWallet,
  } = useEditUserBalanceForm(userWallets, onEditBalance)

  return (
    <Form {...formEditBalance}>
      <form
        onSubmit={formEditBalance.handleSubmit(handleEditBalance)}
        className="flex gap-y-4 flex-col"
      >
        <FormField
          control={formEditBalance.control}
          name="currencyId"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Currency</FormLabel>
              <FormControl>
                <Select
                  value={String(field.value)}
                  onValueChange={handleSelectUserWallet}
                  items={userWallets}
                  classNames="h-10"
                  fullWidth
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formEditBalance.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Balance</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={handleChangeBalance}
                  className="h-10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-auto" size="sm">
          Confirm
        </Button>
      </form>
    </Form>
  )
}

export default EditUserBalanceForm

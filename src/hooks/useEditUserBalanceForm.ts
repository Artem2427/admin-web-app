import {
  EditUserBalancePayload,
  editBalanceFormSchema,
} from '@/components/forms/edit-user-balance-form/schema'
import { UserWalletItem } from '@/types/user'
import { formatCurrencyValue } from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export function useEditUserBalanceForm(
  userWallets: UserWalletItem[],
  onEditBalance: (values: EditUserBalancePayload) => void,
) {
  const formEditBalance = useForm<EditUserBalancePayload>({
    resolver: zodResolver(editBalanceFormSchema),
    defaultValues: {
      currencyId: undefined,
      amount: '',
    },
  })

  const handleEditBalance = (values: EditUserBalancePayload) => {
    onEditBalance(values)
  }

  const handleChangeBalance = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrencyValue(event.target.value)
    if (formattedValue !== null) {
      formEditBalance.setValue('amount', formattedValue)
    }
  }

  const handleSelectUserWallet = (value: string) => {
    const selectedUserWallet = userWallets.find(
      (currency) => currency.value === value,
    )

    if (!selectedUserWallet) {
      return
    }

    formEditBalance.setValue('currencyId', Number(selectedUserWallet.value))
    formEditBalance.setValue(
      'amount',
      formatCurrencyValue(selectedUserWallet.balance) ?? '0',
    )
  }

  useEffect(() => {
    if (!userWallets.length) {
      return
    }

    formEditBalance.setValue('currencyId', Number(userWallets[0].value))
    formEditBalance.setValue(
      'amount',
      formatCurrencyValue(userWallets[0].balance) ?? '0',
    )
    // Dependencies should be included if they are expected to change
  }, [userWallets, formEditBalance])

  return {
    formEditBalance,
    handleEditBalance,
    handleChangeBalance,
    handleSelectUserWallet,
  }
}

import { useAdminUpdateUserBalanceMutation } from '@/generated/graphql'
import { removeCommasAndConvertToNumber } from '@/utils/utils'
import { useEffect } from 'react'
import { UseQueryExecute } from 'urql'

export const useEditUserBalance = (
  userId: number,
  onRefetchUsers?: UseQueryExecute,
) => {
  const [updateUserBalanceResult, executeUpdateUserBalance] =
    useAdminUpdateUserBalanceMutation()

  const handleEditBalance = (values: {
    currencyId: number
    amount: string
  }) => {
    executeUpdateUserBalance({
      updateBalanceDto: {
        ...values,
        userId,
        amount: removeCommasAndConvertToNumber(values.amount),
      },
    })
  }

  useEffect(() => {
    const { data, error, fetching } = updateUserBalanceResult

    if (data && !fetching) {
      // TODO create component
      // toast.show(api.createToastSuccess(`Promocode ${createPromocodeResult.data.promocodeCreate.promocodeName} was created successfully`))
      onRefetchUsers && onRefetchUsers({ requestPolicy: 'network-only' })
    }

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }
  }, [updateUserBalanceResult, onRefetchUsers])

  return { handleEditBalance }
}

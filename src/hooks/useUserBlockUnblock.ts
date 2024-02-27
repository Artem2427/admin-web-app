import * as api from '@/api'
import { useEffect } from 'react'
import { UseQueryExecute, useMutation } from 'urql'

type Options = {
  userId: number
  isBanned: boolean
  onRefetch?: UseQueryExecute
}

export function useUserBlockUnblock(options: Options) {
  const { userId, isBanned, onRefetch } = options
  const [userBlockResult, executeUserBlock] = useMutation(api.user.userBlock)
  const [userUnBlockResult, executeUserUnBlock] = useMutation(
    api.user.userUnBlock,
  )

  const handleBanOrUnBanUser = () => {
    if (isBanned) {
      executeUserUnBlock({ userId })
    } else {
      executeUserBlock({ userId })
    }
  }

  useEffect(() => {
    const result = isBanned ? userUnBlockResult : userBlockResult
    if (result.data && !result.fetching) {
      onRefetch && onRefetch({ requestPolicy: 'network-only' })
    }

    if (result.error) {
      // TODO Handle error
      // toast.show(api.createToastError(error))
    }
  }, [userBlockResult, userUnBlockResult, onRefetch, isBanned])

  return { handleBanOrUnBanUser }
}

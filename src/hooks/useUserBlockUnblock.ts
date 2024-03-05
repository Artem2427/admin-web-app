import {
  useBlockUserMutation,
  useUnBlockUserMutation,
} from '@/generated/graphql'
import { useEffect } from 'react'
import { UseQueryExecute } from 'urql'

type Options = {
  userId: number
  isBanned: boolean
  onRefetch?: UseQueryExecute
}

export function useUserBlockUnblock(options: Options) {
  const { userId, isBanned, onRefetch } = options
  const [userBlockResult, executeUserBlock] = useBlockUserMutation()
  const [userUnBlockResult, executeUserUnBlock] = useUnBlockUserMutation()

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

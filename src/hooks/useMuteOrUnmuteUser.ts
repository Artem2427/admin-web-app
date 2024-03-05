import { useMuteUserMutation, useUnMuteUserMutation } from '@/generated/graphql'
import { Duration } from '@/generated/graphql'
import { useEffect } from 'react'
import { UseQueryExecute } from 'urql'

type Options = {
  userId: number
  isMuted: boolean
  onRefetch?: UseQueryExecute
}

export function useMuteOrUnmuteUser(options: Options) {
  const { userId, isMuted, onRefetch } = options
  const [userMuteResult, executeUserMute] = useMuteUserMutation()
  const [userUnmuteResult, executeUserUnmute] = useUnMuteUserMutation()

  const handleMuteOrUnmuteUser = (muteTimeDuration: Duration) => {
    if (isMuted) {
      executeUserUnmute({ userId })
    } else {
      executeUserMute({ userId, muteTimeDuration })
    }
  }

  useEffect(() => {
    const result = isMuted ? userUnmuteResult : userMuteResult
    if (result.data && !result.fetching) {
      onRefetch && onRefetch({ requestPolicy: 'network-only' })
    }

    if (result.error) {
      // TODO Handle error
      // toast.show(api.createToastError(error))
    }
  }, [userMuteResult, userUnmuteResult, onRefetch, isMuted])

  return { handleMuteOrUnmuteUser }
}

import * as api from '@/api'
import { Duration } from '@/gql/graphql'
import { useEffect } from 'react'
import { UseQueryExecute, useMutation } from 'urql'

type Options = {
  userId: number
  isMuted: boolean
  onRefetch?: UseQueryExecute
}

export function useMuteOrUnmuteUser(options: Options) {
  const { userId, isMuted, onRefetch } = options
  const [userMuteResult, executeUserMute] = useMutation(api.user.muteUser)
  const [userUnmuteResult, executeUserUnmute] = useMutation(api.user.unMuteUser)

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

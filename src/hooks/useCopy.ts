import { useCallback, useState } from 'react'

interface UseCopyOptions {
  copyMessageDuration?: number
}

export function useCopy({ copyMessageDuration = 2000 }: UseCopyOptions = {}) {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = useCallback(
    (textToCopy: string) => {
      if (!isCopied) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            setIsCopied(true)
            setTimeout(() => {
              setIsCopied(false)
            }, copyMessageDuration)
          })
          .catch((err) => {
            console.error('Could not copy text: ', err)
          })
      }
    },
    [isCopied, copyMessageDuration],
  )

  return { copyToClipboard, isCopied }
}

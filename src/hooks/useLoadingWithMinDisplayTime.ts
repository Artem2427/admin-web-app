import { useEffect, useState } from 'react'

export const useLoadingWithMinDisplayTime = (
  isLoading: boolean,
  minDisplayTime: number = 300,
): boolean => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    if (isLoading) {
      setShowSpinner(true)
    } else if (showSpinner) {
      timeoutId = setTimeout(() => setShowSpinner(false), minDisplayTime)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isLoading, showSpinner, minDisplayTime])

  return showSpinner
}

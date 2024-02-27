import { FC } from 'react'

import { Icon } from '../icon/Icon'

type Props = {
  loading?: boolean
  confirmLabel?: string
}

const AlertActionContent: FC<Props> = ({ loading, confirmLabel }) => {
  if (loading) {
    return <Icon component="Preloader" className="w-4 h-4 preloader" />
  }

  return confirmLabel ? confirmLabel : 'Confirm'
}

export default AlertActionContent

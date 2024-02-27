import { cn } from '@/utils/utils'
import { FC } from 'react'

type Props = {
  isBlocked: boolean
}

const BannedCell: FC<Props> = ({ isBlocked }) => {
  return (
    <div
      className={cn(
        'text-sm font-medium leading-none tracking-normal text-left text-red-600 whitespace-nowrap',
        {
          ['text-red-600']: isBlocked,
          ['text-slate-900']: !isBlocked,
        },
      )}
    >
      {isBlocked ? 'Yes' : 'No'}
    </div>
  )
}

export default BannedCell

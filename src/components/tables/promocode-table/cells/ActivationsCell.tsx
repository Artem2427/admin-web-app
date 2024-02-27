import { Progress } from '@/components/ui/progress'
import { calculatePercentage } from '@/utils/utils'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

import { Promocode } from '../PromocodeTable'

type Props = {
  row: Row<Promocode>
}

const ActivationsCell: FC<Props> = ({ row }) => {
  return (
    <div className="flex gap-x-[12px] items-center whitespace-nowrap w-[150px] justify-between">
      {row.original?.activatedCount} / {row.original?.activated}
      {row.original && (
        <Progress
          value={
            calculatePercentage(
              row.original.activatedCount,
              row.original.activated,
            ) || 0
          }
          className="w-[75px]"
          max={row.original.activated}
        />
      )}
    </div>
  )
}

export default ActivationsCell

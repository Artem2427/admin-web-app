import { Badge } from '@/components/ui/badge'
import { TransactionLoyaltyProgramEntity } from '@/generated/graphql'
import { transactionBonusStatuses } from '@/utils/constants'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<TransactionLoyaltyProgramEntity>
}

const StatusCell: FC<Props> = ({ row }) => {
  const statusInfo = transactionBonusStatuses[row.original.type]

  return (
    <div className="whitespace-nowrap">
      {statusInfo && (
        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
      )}
    </div>
  )
}

export default StatusCell

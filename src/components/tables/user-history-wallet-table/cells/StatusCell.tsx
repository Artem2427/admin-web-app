import { Badge } from '@/components/ui/badge'
import { TransactionPaymentEntity } from '@/generated/graphql'
import { transactionStatuses } from '@/utils/constants'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<TransactionPaymentEntity>
}

const StatusCell: FC<Props> = ({ row }) => {
  const statusInfo = transactionStatuses[row.original.status]

  return (
    <div className="whitespace-nowrap">
      {statusInfo && (
        <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
      )}
    </div>
  )
}

export default StatusCell

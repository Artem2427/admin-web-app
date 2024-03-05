import { TransactionPaymentEntity } from '@/generated/graphql'
import { paymentMethodImages } from '@/utils/constants'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<TransactionPaymentEntity>
}

const MethodCell: FC<Props> = ({ row }) => {
  const icon = row.original.method
    ? paymentMethodImages[row.original.method.methodType]?.url
    : ''
  return (
    <div className="flex gap-1.5 items-center whitespace-nowrap">
      {icon && <img src={icon} className="h-[18px]" />}
      {row.original.method?.title}
    </div>
  )
}

export default MethodCell

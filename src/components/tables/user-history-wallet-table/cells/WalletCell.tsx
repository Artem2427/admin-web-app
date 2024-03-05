import { Icon } from '@/components/icon/Icon'
import { TransactionPaymentEntity } from '@/generated/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<TransactionPaymentEntity>
  onCopy: (value: string) => void
}

const WalletCell: FC<Props> = ({ row, onCopy }) => {
  return (
    <div className="whitespace-nowrap flex gap-1.5 items-center justify-between">
      {/* TODO hide full address */}
      {row.original.recipient ?? EMPTY_VALUE}
      {row.original.recipient && (
        <Icon
          component="Copy"
          className="cursor-pointer"
          onClick={() => {
            onCopy(row.original.recipient!)
          }}
        />
      )}
    </div>
  )
}

export default WalletCell

import { Icon } from '@/components/icon/Icon'
import { UserInAdminEntity } from '@/generated/graphql'
import { convertCurrencyWithComma } from '@/utils/utils'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  row: Row<Omit<UserInAdminEntity, 'anonymity'>>
}

const BalanceCell: FC<Props> = ({ row }) => {
  return (
    <div className="flex items-center justify-start whitespace-nowrap">
      <Icon
        component="Usd"
        height="18px"
        width="18px"
        className="w-4.5 h-4.5 mr-1.5"
      />
      {/* TODO count on the FE */}
      {convertCurrencyWithComma(row.original.totalBalance)}
    </div>
  )
}

export default BalanceCell

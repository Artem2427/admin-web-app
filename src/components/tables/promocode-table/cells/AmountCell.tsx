import { Icons } from '@/assets'
import { Icon } from '@/components/icon/Icon'
import { helperService } from '@/services/helper-service'
import { convertCurrencyWithComma } from '@/utils/utils'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

import { Promocode } from '../PromocodeTable'

type Props = {
  row: Row<Promocode>
}

const AmountCell: FC<Props> = ({ row }) => {
  const icon = helperService.transformCurrencyCodeToIcon(
    row.original.Currency.code,
  )

  return (
    <div className="flex gap-x-[6px] items-center whitespace-nowrap">
      {icon in Icons && <Icon component={icon} className="w-4 h-4" />}
      {convertCurrencyWithComma(row.original?.amount)}
    </div>
  )
}

export default AmountCell

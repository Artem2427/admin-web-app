import { Icon } from '@/components/icon/Icon'
import { SelectItem } from '@/components/select/Select'
import { CurrencyCode, ReferralUserEntity } from '@/generated/graphql'
import { convertCurrencyWithComma, countTotalAmount } from '@/utils/utils'
import { Row } from '@tanstack/react-table'
import { FC } from 'react'

type Props = {
  selectedCurrency: SelectItem | null
  row: Row<Omit<ReferralUserEntity, 'anonymity'>>
}

const IncomeCell: FC<Props> = ({ row, selectedCurrency }) => {
  const incomes = countTotalAmount(
    selectedCurrency?.id as CurrencyCode,
    row.original.incomes.map((item) => ({
      amountRub: item.balance?.amountRub,
      amountUsd: item.balance?.amountUsd,
    })),
  )

  return (
    <div className="whitespace-nowrap flex items-center gap-[6px]">
      {selectedCurrency?.icon && (
        <Icon component={selectedCurrency.icon} className="h-[18px] w-[18px]" />
      )}
      {convertCurrencyWithComma(incomes)}
    </div>
  )
}

export default IncomeCell

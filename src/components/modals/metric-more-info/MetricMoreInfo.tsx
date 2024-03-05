import Dialog from '@/components/dialog/Dialog'
import { Icon } from '@/components/icon/Icon'
import { CurrencyStatisticEntity } from '@/generated/graphql'
import { helperService } from '@/services/helper-service'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  title: string
  description: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  statistics: CurrencyStatisticEntity[]
}

const MetricMoreInfo: FC<Props> = ({
  title,
  description,
  open,
  statistics,
  setOpen,
}) => {
  return (
    <Dialog
      title={title}
      open={open}
      onOpenChange={setOpen}
      description={description}
    >
      <div className="flex flex-col gap-[8px] max-h-[280px] overflow-auto text-sm text-primary">
        {statistics.map((currency, index) => (
          <div
            key={index}
            className="border flex items-center gap-[10px] w-full h-[40px] px-[10px] py-[8px] rounded-xl"
          >
            <Icon
              component={helperService.transformCurrencyCodeToIcon(
                currency.currency.code,
              )}
              className="w-[16px] h-[16px]"
            />
            <div className="uppercase flex flex-auto">
              {currency.currency.code}
            </div>
            <div>{currency.balance?.amount}</div>
            <div className="w-px bg-input h-full" />
            <div className="text-primary/50">{currency.balance?.amountUsd}</div>
          </div>
        ))}
      </div>
    </Dialog>
  )
}

export default MetricMoreInfo

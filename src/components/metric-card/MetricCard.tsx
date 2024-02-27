import { MetricInfo } from '@/types/metric'
import { cn, convertCurrencyWithComma } from '@/utils/utils'
import { FC } from 'react'
import React from 'react'

import { Icon } from '../icon/Icon'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export type MetricCardProps = {
  cardInfo: MetricInfo
  isSelected?: boolean
  onClick: (id: string) => void
  onOpenDetailModal: (id: string) => void
  className?: string
}

const MetricCard: FC<MetricCardProps> = ({
  isSelected,
  cardInfo,
  className,
  onClick,
  onOpenDetailModal,
}) => {
  const { id, value, label, icon, isArray } = cardInfo

  const handleClickOnCard = () => {
    onClick(id)
  }

  const handleOpenDetailModal = (event: React.BaseSyntheticEvent) => {
    event.stopPropagation()
    onOpenDetailModal(id)
  }

  return (
    <Card
      onClick={handleClickOnCard}
      className={cn(className, {
        'border-primary': isSelected,
        'cursor-pointer': !!onClick,
      })}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-[15px]">
        <CardTitle className="text-sm font-medium text-primary">
          {label}
        </CardTitle>
        <Icon component={icon} />
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="text-2xl font-bold text-primary">
          {isArray ? `$${convertCurrencyWithComma(value)}` : value}
        </div>
        {isArray && value > 0 && (
          <Button
            variant="secondary"
            onClick={handleOpenDetailModal}
            className="h-[34px] w-[34px] p-0"
          >
            <Icon component="Layers" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default MetricCard

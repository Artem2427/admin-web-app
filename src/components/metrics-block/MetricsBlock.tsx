import { CurrencyStatisticEntity } from '@/gql/graphql'
import { MetricInfo } from '@/types/metric'
import { convertCurrencyWithComma } from '@/utils/utils'
import { FC, useState } from 'react'

import MetricCard from '../metric-card/MetricCard'
import MetricMoreInfo from '../modals/metric-more-info/MetricMoreInfo'

type Props = {
  metrics: MetricInfo[]
  selectedMetricId: string | null
  onSelect: (id: string) => void
}

const gridStyle = {
  gridTemplateColumns: 'repeat(auto-fill, minmax(264px, 1fr))',
}

const MetricsBlock: FC<Props> = ({ metrics, selectedMetricId, onSelect }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedCardInfo, setSelectedCardInfo] = useState<{
    currencies: CurrencyStatisticEntity[]
    title: string
    description: string
  }>({ currencies: [], title: '', description: '' })

  const handleOpenMoreInfo = (id: string) => {
    const findMetric = metrics.find((item) => item.id === id)

    if (findMetric && Array.isArray(findMetric.info)) {
      setSelectedCardInfo({
        currencies: findMetric.info,
        title: `$${convertCurrencyWithComma(findMetric.value)}`,
        description: findMetric.label,
      })
    }

    setIsOpenModal(true)
  }

  return (
    <>
      <div className="mb-[32px] grid gap-[12px]" style={gridStyle}>
        {metrics.map((cardMetric) => (
          <MetricCard
            cardInfo={cardMetric}
            key={cardMetric.id}
            isSelected={selectedMetricId === cardMetric.id}
            onClick={onSelect}
            onOpenDetailModal={handleOpenMoreInfo}
          />
        ))}
      </div>
      <MetricMoreInfo
        title={selectedCardInfo.title}
        description={selectedCardInfo.description}
        open={isOpenModal}
        setOpen={setIsOpenModal}
        statistics={selectedCardInfo.currencies}
      />
    </>
  )
}

export default MetricsBlock

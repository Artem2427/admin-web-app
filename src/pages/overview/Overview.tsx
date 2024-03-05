// TODO rewrite in VEGA-501
import ChartWrapper from '@/components/chart-wrapper/ChartWrapper'
import { DateRangePicker } from '@/components/date-range-picker/DateRangePicker'
// import Dialog from '@/components/dialog/Dialog'
// import { Icon } from '@/components/icon/Icon'
// import { MetricCardProps } from '@/components/metric-card/MetricCard'
import OverviewChart from '@/components/overview-chart/OverviewChart'
import { MOCK_DATA } from '@/components/overview-chart/mock'
import { PageTitle } from '@/components/page-title/PageTitle'
import { withPermission } from '@/hocs/withPermission'
import { permissions } from '@vega/permissions'
import { FC, useCallback, useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'

const now = new Date()
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)

const Overview: FC = () => {
  // const [selectedCard, setSelectedCard] = useState<MetricCardProps | null>(null)
  const [selectedCardId] = useState<string | null>(null)
  // const cardDetailModalInfo = useRef<HTMLButtonElement>(null)
  //TODO remove after api connection
  const [data, setData] = useState(MOCK_DATA)

  const [date, setDate] = useState<DateRange | undefined>({
    from: startOfMonth,
    to: startOfNextMonth,
  })

  // TODO remove in future
  const updateData = useCallback(() => {
    const newData = data.map((item) => {
      return { ...item, total: Math.floor(Math.random() * 5000) + 1000 }
    })
    setData(newData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const selectedCardTitle = useMemo(() => {
  //   return METRICS_CARD_DATA_MOCK.find((card) => card.id === selectedCardId)
  //     ?.label
  // }, [selectedCardId])

  // const handleOpenMoreInfo = (id: string) => {
  //   cardDetailModalInfo.current?.click()
  //   const card = METRICS_CARD_DATA_MOCK.find((card) => card.id === id)

  //   setSelectedCard(card || null)
  // }

  // const handleSelectCard = (id: string) => {
  //   if (selectedCardId === id) {
  //     setSelectedCardId(null)
  //     return
  //   }

  //   setSelectedCardId(id)
  // }

  useEffect(() => {
    updateData()
  }, [selectedCardId, date, updateData])

  return (
    <>
      <PageTitle
        titles={['Dashboard']}
        className="mb-[24px]"
        rightElement={<DateRangePicker date={date} setDate={setDate} />}
      />
      {/* <div className="mb-[32px] grid gap-[12px]" style={gridStyle}>
        {METRICS_CARD_DATA_MOCK.map((cardMetric) => (
          <MetricCard
            {...cardMetric}
            key={cardMetric.id}
            isSelected={selectedCardId === cardMetric.id}
            onClick={handleSelectCard}
            onOpenDetailModal={handleOpenMoreInfo}
          />
        ))}
      </div> */}

      {/* <ChartWrapper title={selectedCardTitle ?? 'Overview'}> */}
      <ChartWrapper title={'Overview'}>
        <OverviewChart data={data} />
      </ChartWrapper>

      {/* <Dialog
        title={selectedCard?.value || ''}
        triggerRef={cardDetailModalInfo}
        description={selectedCard?.label}
      >
        <div className="flex flex-col gap-[8px] max-h-[280px] overflow-auto text-sm text-primary">
          {CURRENCIES_MOCK.map((currency, index) => (
            <div
              key={index}
              className="border flex items-center gap-[10px] w-full h-[40px] px-[10px] py-[8px] rounded-xl"
            >
              <Icon component={currency.icon} className="w-[16px] h-[16px]" />
              <div className="uppercase flex flex-auto">{currency.label}</div>
              <div>{currency.amount}</div>
              <div className="w-px bg-input h-full" />
              <div className="text-primary/50">{currency.valueInUSD}</div>
            </div>
          ))}
        </div>
      </Dialog> */}
    </>
  )
}

export default withPermission(permissions.overview.view)(Overview)

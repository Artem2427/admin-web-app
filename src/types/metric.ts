import { Icons } from '@/assets'
import { CurrencyStatisticEntity } from '@/gql/graphql'

export type MetricInfo = {
  id: string
  icon: keyof typeof Icons
  label: string
  value: number
  isArray: boolean
  info: CurrencyStatisticEntity[] | number
}

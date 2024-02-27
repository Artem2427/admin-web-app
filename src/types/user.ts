import { SelectItem } from '@/components/select/Select'
import { CurrencyWalletEntity } from '@/gql/graphql'

export type UserWalletItem = Partial<Omit<CurrencyWalletEntity, 'id'>> &
  SelectItem

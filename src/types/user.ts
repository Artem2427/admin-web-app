import { SelectItem } from '@/components/select/Select'
import { CurrencyWalletEntity } from '@/generated/graphql'

export type UserWalletItem = Partial<Omit<CurrencyWalletEntity, 'id'>> &
  SelectItem

import { CreatePromocodeDto, UpdatePromocodeDto } from '@/generated/graphql'

export const promocodeTableActions = {
  edit: 'edit',
  create: 'create',
  delete: 'delete',
} as const

export type PromocodeTableActionType = ValueOf<typeof promocodeTableActions>

export type CreatePromocodeProps = {
  action: 'create'
  onCreatePromocode: (createPromocodeInput: CreatePromocodeDto) => void
}

export type EditPromocodeProps = {
  action: 'edit'
  promocode?: CreatePromocodeDto & { id: number }
  onEditPromocode: (updatePromocodeInput: UpdatePromocodeDto) => void
}

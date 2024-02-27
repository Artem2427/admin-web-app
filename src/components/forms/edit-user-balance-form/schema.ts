import { regex } from '@vega/common'
import * as z from 'zod'

export const editBalanceFormSchema = z.object({
  currencyId: z.number(),
  amount: z
    .string()
    .min(1, { message: 'Amount is required' })
    .regex(regex.AMOUNT_REGEX, {
      message: 'Not valid format',
    }),
})

export type EditUserBalancePayload = z.infer<typeof editBalanceFormSchema>

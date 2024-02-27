import { regex } from '@vega/common'
import * as z from 'zod'

export const promocodeFormSchema = z.object({
  promocodeName: z
    .string()
    .min(1, { message: 'Promocode name is required' })
    .max(16, { message: 'Max length 16' }),
  activated: z.coerce.string().min(1, { message: 'Activated is required' }),
  currencyId: z.string().min(1, { message: 'Currency is required' }),
  amount: z
    .string()
    .min(1, { message: 'Amount is required' })
    .regex(regex.AMOUNT_REGEX, {
      message: 'Not valid format',
    }),
})

export type PromocodePayload = z.infer<typeof promocodeFormSchema>

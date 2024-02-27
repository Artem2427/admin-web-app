import * as z from 'zod'

export const userActionsPanelFormSchema = z.object({
  currencyId: z.number(),
  muteDuration: z.string(),
})

export type UserActionsPanelPayload = z.infer<typeof userActionsPanelFormSchema>

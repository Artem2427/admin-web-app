import { regex } from '@vega/common'
import * as z from 'zod'

export const personalInformationFormSchema = z.object({
  userId: z.number(),
  registrationData: z.string(),
  numberOfReferrals: z.number(),
  email: z
    .string()
    .email('Invalid email address')
    .min(1, { message: 'Email is required' })
    .max(256, { message: 'Email is too long' }),
  username: z
    .string()
    .min(3, { message: 'Minimum 3 characters' })
    .max(24, { message: 'Username is too long' })
    .regex(regex.USERNAME_REGEX, {
      message: 'Username can only contain characters and numbers',
    }),
  dateRegistration: z.string(),
  whoInvited: z.string(),
  registrationMethod: z.string(),
})

export type PersonalInformationPayload = z.infer<
  typeof personalInformationFormSchema
>

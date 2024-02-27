import Button from '@/components/button/Button'
import { Icon } from '@/components/icon/Icon'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UpdateUserDataDto, UserPersonalInfoEntity } from '@/gql/graphql'
import { EMPTY_VALUE } from '@/utils/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
  PersonalInformationPayload,
  personalInformationFormSchema,
} from './schema'

type Props = {
  userPersonalInfo: Omit<UserPersonalInfoEntity, 'anonymity'>
  onUpdatePersonalInfo: (values: UpdateUserDataDto) => void
}

const PersonalInformationForm: FC<Props> = ({
  userPersonalInfo,
  onUpdatePersonalInfo,
}) => {
  const navigate = useNavigate()

  const personalInformationForm = useForm<PersonalInformationPayload>({
    resolver: zodResolver(personalInformationFormSchema),
    defaultValues: {
      userId: userPersonalInfo.id,
      registrationData: userPersonalInfo.socialId || EMPTY_VALUE,
      numberOfReferrals: userPersonalInfo.referrals,
      email: userPersonalInfo.email || EMPTY_VALUE,
      username: userPersonalInfo.username || EMPTY_VALUE,
      dateRegistration: dayjs(userPersonalInfo.createdAt).format('DD.MM.YYYY'),
      whoInvited: userPersonalInfo.invitedUsername || EMPTY_VALUE,
      registrationMethod: userPersonalInfo.authProvider,
    },
  })

  const handleNavigateToUserReferrals = () => {
    navigate(
      `/users/${userPersonalInfo.id}/referrals?user=${userPersonalInfo.username}`,
    )
  }

  const handleReset = () => {
    personalInformationForm.reset({
      email: userPersonalInfo.email || EMPTY_VALUE,
      username: userPersonalInfo.username || EMPTY_VALUE,
    })
  }

  const onSubmit = (values: PersonalInformationPayload) => {
    const { userId, username, email } = values
    onUpdatePersonalInfo({ userId, username, email })
    personalInformationForm.reset({}, { keepValues: true })
  }

  return (
    <Form {...personalInformationForm}>
      <form onSubmit={personalInformationForm.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-x-9 gap-y-6">
          <FormField
            control={personalInformationForm.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="text-gray-text h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={personalInformationForm.control}
            name="registrationData"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration data</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="text-gray-text h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-2 items-end min-w-[280px] self-start">
            <FormField
              control={personalInformationForm.control}
              name="numberOfReferrals"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Number of referrals</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      readOnly
                      className="text-gray-text h-10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant="secondary"
              className="px-3"
              onClick={handleNavigateToUserReferrals}
            >
              <Icon component="Users" />
            </Button>
          </div>

          <FormField
            control={personalInformationForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email
                  {personalInformationForm.getFieldState('email').isDirty && (
                    <span className="text-destructive">*</span>
                  )}
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personalInformationForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Username
                  {personalInformationForm.getFieldState('username')
                    .isDirty && <span className="text-destructive">*</span>}
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personalInformationForm.control}
            name="dateRegistration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date registration</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="text-gray-text h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personalInformationForm.control}
            name="whoInvited"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Who invited</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="text-gray-text h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personalInformationForm.control}
            name="registrationMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration method</FormLabel>
                <FormControl>
                  <Input {...field} readOnly className="text-gray-text h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2 mt-8">
          <Button
            type="submit"
            disabled={!personalInformationForm.formState.isDirty}
          >
            Save
          </Button>
          <Button type="reset" variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default PersonalInformationForm

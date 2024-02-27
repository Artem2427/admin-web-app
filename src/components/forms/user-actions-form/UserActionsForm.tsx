import Button from '@/components/button/Button'
import { Icon } from '@/components/icon/Icon'
import { Select } from '@/components/select/Select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Duration } from '@/gql/graphql'
import { UserWalletItem } from '@/types/user'
import { muteOptions } from '@/utils/constants'
import { cn } from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { Dispatch, FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { UserActionsPanelPayload, userActionsPanelFormSchema } from './schema'

type Props = {
  userWallets: UserWalletItem[]
  isBlocked: boolean
  endBlocking: string
  selectedBalance: number | null
  setSelectedBalance: Dispatch<React.SetStateAction<number | null>>
  onOpenEditBalanceModal: () => void
  onBanOrUnBan: () => void
  onMuteOrUnmute: (muteTimeDuration: Duration) => void
}

const UserActionsForm: FC<Props> = ({
  userWallets,
  isBlocked,
  endBlocking,
  selectedBalance,
  setSelectedBalance,
  onOpenEditBalanceModal,
  onBanOrUnBan,
  onMuteOrUnmute,
}) => {
  const userActionsForm = useForm<UserActionsPanelPayload>({
    resolver: zodResolver(userActionsPanelFormSchema),
    defaultValues: {
      currencyId: undefined,
      muteDuration: muteOptions[0].value,
    },
  })

  const currency = userActionsForm.watch('currencyId')
  const muteTimeDuration = userActionsForm.watch('muteDuration')

  const handleMuteOrUnmuteUser = () => {
    onMuteOrUnmute(muteTimeDuration as Duration)
  }

  useEffect(() => {
    if (currency) {
      setSelectedBalance(currency)
    }
  }, [currency, setSelectedBalance])

  useEffect(() => {
    if (!userWallets.length || selectedBalance) {
      return
    }

    userActionsForm.setValue('currencyId', Number(userWallets[0].value))
  }, [userWallets, userActionsForm, selectedBalance])

  return (
    <Form {...userActionsForm}>
      <div className="flex gap-9 items-center mt-8">
        <div className="flex gap-2 items-end min-w-[280px] self-start">
          <FormField
            control={userActionsForm.control}
            name="currencyId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Balance</FormLabel>
                <FormControl>
                  <Select
                    value={String(field.value)}
                    onValueChange={field.onChange}
                    items={userWallets}
                    classNames="h-10"
                    fullWidth
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant="secondary"
            className="px-3"
            onClick={onOpenEditBalanceModal}
          >
            <Icon component="Edit" />
          </Button>
        </div>

        <div className="flex gap-2 items-end min-w-[280px]">
          <FormField
            control={userActionsForm.control}
            name="muteDuration"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Muted chat</FormLabel>
                <FormControl>
                  <Select
                    value={String(field.value)}
                    onValueChange={field.onChange}
                    items={muteOptions}
                    classNames="h-10"
                    fullWidth
                  />
                </FormControl>
                <div
                  className={cn('flex justify-between gap-2 text-gray-text', {
                    'justify-end': !endBlocking,
                  })}
                >
                  {Boolean(endBlocking) && (
                    <p className="p-0 text-sm">
                      {`End of blocking in ${dayjs(endBlocking).format(
                        'HH:mm',
                      )}`}
                    </p>
                  )}
                  <Button
                    className="p-0 h-auto font-medium bg-transparent text-blue-600 hover:text-sky-700 hover:bg-transparent"
                    onClick={handleMuteOrUnmuteUser}
                  >
                    {endBlocking ? 'Unmute' : 'Mute'}
                  </Button>
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button
          variant={isBlocked ? 'secondary' : 'destructive'}
          className="self-center"
          onClick={onBanOrUnBan}
        >
          {isBlocked ? 'UnBan' : 'Ban account'}
        </Button>
      </div>
    </Form>
  )
}

export default UserActionsForm

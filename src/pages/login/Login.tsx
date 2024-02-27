import * as api from '@/api'
import Button from '@/components/button/Button'
import { Icon } from '@/components/icon/Icon'
import Logo from '@/components/logo/Logo'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { storageService } from '@/services/storage-service'
import { IS_AUTHORIZED } from '@/utils/store-keys'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, RefObject, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from 'urql'
import * as z from 'zod'

type SocialButton = {
  iconComponent: 'Vk' | 'Telegram' | 'Google'
  label: string
  link?: string
  ref?: RefObject<HTMLButtonElement>
}

const logInSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, { message: 'Email is required' })
    .max(256, { message: 'Email is too long' }),
  password: z.string().min(1, { message: 'Password is required' }).max(256, {
    message: 'Password is too long',
  }),
})

type LogInFormSchema = z.infer<typeof logInSchema>

const AUTHORIZED_VIA_GOOGLE = `${api.API_URL}/admin/auth/google`
const AUTHORIZED_VIA_VK = `${api.API_URL}/admin/auth/vk`

const Login: FC = () => {
  // TODO VEGA-413
  // const toast = useToast()
  const navigate = useNavigate()
  const telegramWrapperRef = useRef<HTMLButtonElement>(null)

  const [isUserBlocked, setIsUserBlocked] = useState(false)

  const logInForm = useForm<LogInFormSchema>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [logInResult, executeLogIn] = useMutation(api.auth.logIn)

  const onSubmit = (values: LogInFormSchema) => {
    executeLogIn({ ...values }).catch(console.error)
  }

  const socialButtons: SocialButton[] = [
    {
      iconComponent: 'Vk',
      label: 'VK',
      link: AUTHORIZED_VIA_VK,
    },
    {
      iconComponent: 'Telegram',
      label: 'Telegram',
      ref: telegramWrapperRef,
    },
    {
      iconComponent: 'Google',
      label: 'Google',
      link: AUTHORIZED_VIA_GOOGLE,
    },
  ]

  useEffect(() => {
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://telegram.org/js/telegram-widget.js?22'
    scriptElement.setAttribute('data-telegram-login', 'vega2outhadminbot')
    scriptElement.setAttribute('data-size', 'large')
    scriptElement.setAttribute(
      'data-auth-url',
      `${api.API_URL}/admin/auth/telegram/callback`,
    )
    scriptElement.setAttribute('data-request-access', 'write')
    scriptElement.setAttribute('id', 'telegram-button')
    scriptElement.async = true

    scriptElement.onload = () => {
      const tgIframe: HTMLElement | null = document.querySelector(
        '#telegram-login-vega2outhadminbot',
      )

      if (tgIframe) {
        tgIframe.style.opacity = '1e-07'
        tgIframe.style.position = 'absolute'
        tgIframe.style.width = '112px'
        tgIframe.style.height = '100%'
      }
    }

    telegramWrapperRef.current?.appendChild(scriptElement)
  }, [])

  useEffect(() => {
    const { error, data } = logInResult

    if (error) {
      // TODO create component
      // toast.show(api.createToastError(error))
    }

    if (data && !data.signInAdmin.isBlocked) {
      // TODO VEGA-413
      // toast.show(api.createToastSuccess('You are logged in!'))
      storageService.set(IS_AUTHORIZED, true)
      navigate('/users')
    }

    if (data && data.signInAdmin.isBlocked) {
      setIsUserBlocked(true)
    }
  }, [logInResult, navigate])

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-[338px]">
        <div className="flex justify-center flex-col mb-[83px]">
          <Logo className="w-[164px] flex justify-center mx-auto" />
          <p className="text-center mt-[11px] text-xs font-semibold text-gray-light tracking-[3.12px]">
            ADMIN PANEL
          </p>
        </div>
        <div className="flex items-center gap-x-2.5 justify-between mb-[26px]">
          {socialButtons.map((socialButton) => (
            <Button
              key={socialButton.label}
              className="w-full relative"
              variant="outline"
              size="sm"
              refProp={socialButton.ref}
            >
              <Link to={socialButton.link ?? ''} className="flex items-center">
                <Icon
                  component={socialButton.iconComponent}
                  className="mr-[8px] h-[16px] w-[16px]"
                />
                {socialButton.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-x-2.5 mb-[20px]">
          <div className="w-full h-px bg-border" />
          <span className="text-xs whitespace-nowrap text-gray-text">
            OR CONTINUE WITH
          </span>
          <div className="w-full h-px bg-border" />
        </div>
        <Form {...logInForm}>
          <form
            onSubmit={logInForm.handleSubmit(onSubmit)}
            className="flex gap-y-4 flex-col"
          >
            <FormField
              control={logInForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="m@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={logInForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" autoComplete="on" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full mt-[8px]"
              size="sm"
              disabled={logInResult.fetching}
              loading={logInResult.fetching}
            >
              Login
            </Button>
            {isUserBlocked && (
              <div className="text-destructive flex justify-center">
                Your account is blocked!
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login

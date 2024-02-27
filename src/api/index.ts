import { authService } from '@/services/auth-service'
import { storageService } from '@/services/storage-service'
import { Routes } from '@/utils/constants'
import { IS_AUTHORIZED } from '@/utils/store-keys'
import { devtoolsExchange } from '@urql/devtools'
import { authExchange } from '@urql/exchange-auth'
import {
  Client,
  CombinedError,
  cacheExchange,
  fetchExchange,
  mapExchange,
} from 'urql'

import * as auth from './auth'

export * as currency from './currency'
export * as auth from './auth'
export * as promocode from './promocode'
export * as user from './user'
export * as wallet from './wallet'
export * as transactions from './transactions'
export * as referral from './referral'

export const API_URL = import.meta.env.VITE_API

if (!API_URL) {
  throw new Error('Missing api url!')
}

const isAuthError = (error: CombinedError): boolean => {
  return error.graphQLErrors.some((e) => e.extensions?.code === 401)
}

const isForbidden = (error: CombinedError): boolean => {
  return error?.graphQLErrors.some((e) => e.extensions.code === 'FORBIDDEN')
}

export const client = new Client({
  url: `${API_URL}/graphql`,
  exchanges: [
    devtoolsExchange,
    cacheExchange,
    mapExchange({
      onError(error) {
        if (isAuthError(error) || isForbidden(error)) {
          authService.logout()
        }
      },
    }),
    authExchange(async (utils) => {
      return {
        addAuthToOperation(operation) {
          return operation
        },
        didAuthError(error) {
          return isAuthError(error) || isForbidden(error)
        },
        async refreshAuth() {
          const response = await utils.mutate(auth.refresh, {})

          if (response.data?.refreshTokens) {
            storageService.set(IS_AUTHORIZED, true)
          }

          if (
            response.error &&
            (isAuthError(response.error) || isForbidden(response.error))
          ) {
            storageService.remove(IS_AUTHORIZED)
            window.location.href = Routes.Login
          }
        },
      }
    }),
    fetchExchange,
  ],
  fetchOptions: () => ({ credentials: 'include' }),
})

// Преобразование объекта ошибки urlq
export const formatError = (error: CombinedError) => {
  const { graphQLErrors, networkError } = error
  if (networkError) return { type: 'Network error', text: networkError.message }
  if (graphQLErrors.length)
    return { type: 'Server error', text: graphQLErrors[0]?.message }
  return {
    type: 'Undefined error',
    text: 'Contact Support',
  }
}

// Создание объекта ошибки запроса для системы уведомлений
export const createToastError = (error: CombinedError) => {
  const message = formatError(error)
  return {
    type: 'error' as const,
    title: message.type,
    description: message.text,
  }
}

// Создание объекта успешного запроса для системы уведомлений
export const createToastSuccess = (message: string) => {
  return {
    type: 'success' as const,
    title: 'Success',
    description: message,
  }
}

// Создание объекта игформационного запроса для системы уведомлений
export const createToastInfo = (message: string) => {
  return {
    type: 'default' as const,
    title: 'Info',
    description: message,
  }
}

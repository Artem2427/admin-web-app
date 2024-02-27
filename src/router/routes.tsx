import Promocodes from '@/pages/promocodes/Promocodes'
import Referral from '@/pages/referral/Referral'
import User from '@/pages/user/User'
import { ReactNode } from 'react'

import Login from '../pages/login/Login'
import Overview from '../pages/overview/Overview'
import Transactions from '../pages/transactions/Transactions'
import { Users } from '../pages/users/Users'
import { RouteKey, RouteKeys, RoutePath, Routes } from '../utils/constants'

export type RouterItem = {
  key: RouteKey
  path: RoutePath
  exact: boolean
  requiresAuth: boolean
  component: ReactNode
}

export const ROUTES = (): RouterItem[] => {
  return [
    {
      key: RouteKeys.Overview,
      path: Routes.Overview,
      exact: true,
      requiresAuth: true,
      component: <Overview />,
    },
    {
      key: RouteKeys.Login,
      path: Routes.Login,
      exact: true,
      requiresAuth: false,
      component: <Login />,
    },
    {
      key: RouteKeys.Users,
      path: Routes.Users,
      exact: true,
      requiresAuth: true,
      component: <Users />,
    },
    {
      key: RouteKeys.User,
      path: Routes.User,
      exact: true,
      requiresAuth: true,
      component: <User />,
    },
    {
      key: RouteKeys.Promocode,
      path: Routes.Promocode,
      exact: true,
      requiresAuth: true,
      component: <Promocodes />,
    },
    {
      key: RouteKeys.Referrals,
      path: Routes.Referrals,
      exact: true,
      requiresAuth: true,
      component: <Referral />,
    },
    {
      key: RouteKeys.Transactions,
      path: Routes.Transactions,
      exact: true,
      requiresAuth: true,
      component: <Transactions />,
    },
    {
      key: RouteKeys.AdminAccess,
      path: Routes.AdminAccess,
      exact: true,
      requiresAuth: true,
      component: <>AdminAccess page</>,
    },
  ]
}

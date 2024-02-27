import { authService } from '@/services/auth-service'
import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '../components/layout/Layout'

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  if (authService.isLoggedIn()) {
    return <Layout>{children}</Layout>
  }

  return <Navigate to="/login" />
}

export default PrivateRoute

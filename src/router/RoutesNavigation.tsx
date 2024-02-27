import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from '../pages/404/NotFound'
import PrivateRoute from './PrivateRoute'
import { ROUTES } from './routes'

const RoutesNavigation: FC = () => {
  return (
    <Routes>
      {ROUTES().map((route) => {
        return (
          <Route
            key={route.key}
            path={route.path}
            element={
              route.requiresAuth ? (
                <PrivateRoute>{route.component}</PrivateRoute>
              ) : (
                route.component
              )
            }
          />
        )
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesNavigation

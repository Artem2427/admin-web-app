import { useUserStore } from '@/stores/useUserStore'
import { isUserHasPermission } from '@/utils/utils'
import { Permission } from '@vega/permissions'
import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'

export function withPermission<T extends Record<string, unknown>>(
  requiredPermission: Permission,
) {
  return function (WrappedComponent: ComponentType<T>) {
    const WithPermission = (props: T) => {
      const user = useUserStore((state) => state.user)

      if (!user || !isUserHasPermission(requiredPermission, user)) {
        // TODO add notification not access
        return <Navigate to="/" />
      }

      return <WrappedComponent {...(props as T)} />
    }

    WithPermission.displayName = `WithPermission(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    return WithPermission
  }
}

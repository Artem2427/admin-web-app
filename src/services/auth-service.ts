import { IS_AUTHORIZED } from '@/utils/store-keys'

import { storageService } from './storage-service'

class AuthService {
  logout(): void {
    storageService.remove(IS_AUTHORIZED)
  }

  isLoggedIn(): boolean {
    return !!storageService.get<boolean>(IS_AUTHORIZED)
  }
}

export const authService = new AuthService()

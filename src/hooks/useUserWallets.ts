import { useFindUserWalletsQuery } from '@/generated/graphql'
import { helperService } from '@/services/helper-service'
import { UserWalletItem } from '@/types/user'
import { useEffect, useState } from 'react'

export function useUserWallets(userId: number, isOpenDropdown: boolean) {
  const [userWalletsList, setUserWalletsList] = useState<UserWalletItem[]>([])
  const [userWallets, fetchUserWallets] = useFindUserWalletsQuery({
    pause: true,
    variables: {
      userId,
    },
  })

  useEffect(() => {
    if (isOpenDropdown) {
      fetchUserWallets()
    }
  }, [isOpenDropdown, fetchUserWallets])

  useEffect(() => {
    if (userWallets.data && !userWallets.fetching) {
      const mappedUserWallets: UserWalletItem[] =
        userWallets.data.userWallets.map((userWallet) => ({
          balance: userWallet.balance,
          value: String(userWallet.currencyId),
          label: userWallet.currency.code,
          id: String(userWallet.currencyId),
          icon: helperService.transformCurrencyCodeToIcon(
            userWallet.currency.code,
          ),
        }))
      setUserWalletsList(mappedUserWallets)
    }
  }, [userWallets])

  return { userWalletsList, fetchUserWallets }
}

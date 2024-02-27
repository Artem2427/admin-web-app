import { graphql } from '@/gql'

export const getAllCurrencyWallets = graphql(`
  query CurrencyWallets {
    currencyWallets {
      id
      balance
      userId
      currencyId
      currency {
        id
        code
      }
    }
  }
`)

export const getAllCurrencyWalletsByUser = graphql(`
  query UserWallets($userId: Int!) {
    userWallets(userId: $userId) {
      id
      address
      destTag
      userId
      currencyId
      balance
      currency {
        id
        code
      }
    }
  }
`)

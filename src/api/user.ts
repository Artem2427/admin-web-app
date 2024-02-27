import { graphql } from '@/gql'

export const getMe = graphql(`
  query Me {
    me {
      id
      email
      username
      referralCode
      totalBalance
      socialId
      avatarLink
      createdAt
      authProvider
      isEmailConfirmed
      anonymity {
        id
        userId
        local
        server
        createdAt
        updatedAt
      }
      adminRights {
        userId
        accessMask
        createdAt
        updatedAt
      }
    }
  }
`)

export const getAllUsers = graphql(`
  query AdminFindAll(
    $paginationInput: PaginationInput!
    $search: String
    $sort: UserSortingInput
  ) {
    adminFindAll(
      paginationInput: $paginationInput
      sort: $sort
      search: $search
    ) {
      data {
        id
        email
        username
        referralCode
        totalBalance
        socialId
        avatarLink
        createdAt
        isBlocked
        authProvider
        isEmailConfirmed
        referrals
      }
      metadata {
        prev
        next
      }
    }
  }
`)

export const getPersonalInfoByUser = graphql(`
  query GetPersonalInfo($userId: Int!) {
    getPersonalInfo(userId: $userId) {
      id
      email
      username
      referralCode
      totalBalance
      socialId
      avatarLink
      createdAt
      isBlocked
      authProvider
      isEmailConfirmed
      referrals
      invitedUsername
      muteTimeDuration
      endBlocking
    }
  }
`)

export const userWalletHistory = graphql(`
  query UserWalletHistory($input: HistoryWalletTransactionsInput!) {
    userWalletHistory(input: $input) {
      metadata {
        prev
        next
      }
      data {
        id
        amount
        type
        status
        recipient
        destTag
        trackerId
        currencyId
        userId
        methodId
        currencyWalletId
        createdAt
        processedAt
        methodType
        method {
          id
          title
          currencyType
          system
          methodType
          direction
          isEnabled
          currencyId
          currency {
            id
            code
            type
          }
        }
        currencyWallet {
          id
          balance
          address
          destTag
          userId
          currencyId
          currency {
            id
            code
            type
          }
        }
        currency {
          id
          code
          type
        }
        user {
          username
          id
          referralCode
          totalBalance
          createdAt
          isEmailConfirmed
          authProvider
          anonymity {
            id
            userId
            local
            server
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`)

export const userBonusHistory = graphql(`
  query Admin__loyaltyProgramTransactions(
    $input: TransactionLoyaltyProgramAdminInput!
  ) {
    admin__loyaltyProgramTransactions(input: $input) {
      metadata {
        prev
        next
      }
      data {
        id
        type
        amount
        currencyId
        createdAt
        percentage
        userId
        currency {
          id
          code
          type
        }
        user {
          username
          id
          referralCode
          totalBalance
          createdAt
          authProvider
          isEmailConfirmed
          anonymity {
            id
            userId
            local
            server
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`)

export const getUserOverview = graphql(`
  query UserOverview($input: UserOverviewInput!) {
    userOverview(input: $input) {
      totalDeposits
      referralCount
      betAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
      winAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
      bonusAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
      depositAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
      withdrawalAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
      ggrAmounts {
        currency {
          id
          code
          type
        }
        balance {
          amount
          amountUsd
          amountRub
        }
      }
    }
  }
`)

export const updateUserBalance = graphql(`
  mutation AdminUpdateUserBalance($updateBalanceDto: UpdateBalanceDto!) {
    adminUpdateUserBalance(UpdateBalanceDto: $updateBalanceDto) {
      id
      balance
      address
      destTag
      userId
      currencyId
    }
  }
`)

export const adminUpdateUserData = graphql(`
  mutation AdminUpdateUserData($updateUserDataDto: UpdateUserDataDto!) {
    adminUpdateUserData(UpdateUserDataDto: $updateUserDataDto) {
      id
      email
      username
      referralCode
      totalBalance
      socialId
      avatarLink
      createdAt
      authProvider
      isEmailConfirmed
    }
  }
`)

export const userBlock = graphql(`
  mutation BlockUser($userId: Int!) {
    blockUser(userId: $userId)
  }
`)

export const userUnBlock = graphql(`
  mutation UnBlockUser($userId: Int!) {
    unBlockUser(userId: $userId)
  }
`)

export const muteUser = graphql(`
  mutation MuteUser($userId: Int!, $muteTimeDuration: Duration!) {
    muteUser(userId: $userId, muteTimeDuration: $muteTimeDuration)
  }
`)

export const unMuteUser = graphql(`
  mutation UnMuteUser($userId: Int!) {
    unMuteUser(userId: $userId)
  }
`)

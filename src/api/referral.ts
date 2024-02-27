import { graphql } from '@/gql'

export const userReferrals = graphql(`
  query UserReferrals($input: UserReferralsInput!) {
    userReferrals(input: $input) {
      data {
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
        muteTimeDuration
        endBlocking
        incomes {
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
      metadata {
        prev
        next
      }
    }
  }
`)

export const untieReferral = graphql(`
  mutation UntieReferral($userId: Int!) {
    untieReferral(userId: $userId) {
      id
      referralCode
      totalBalance
      createdAt
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
`)

export const recalculateReferralsBalance = graphql(`
  mutation RecalculateUserReferralIncomes($userId: Int!) {
    recalculateUserReferralIncomes(userId: $userId)
  }
`)

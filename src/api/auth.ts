import { graphql } from '@/gql'

export const logIn = graphql(`
  mutation SignInAdmin($email: String!, $password: String!) {
    signInAdmin(signInInput: { email: $email, password: $password }) {
      isBlocked
    }
  }
`)

export const logOut = graphql(`
  mutation LogOut {
    logout
  }
`)

export const refresh = graphql(`
  mutation RefreshTokens {
    refreshTokens {
      accessToken
    }
  }
`)

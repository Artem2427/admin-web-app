import { graphql } from '@/gql'

export const getCurrencies = graphql(`
  query Currencies {
    currencies {
      id
      code
      type
    }
  }
`)

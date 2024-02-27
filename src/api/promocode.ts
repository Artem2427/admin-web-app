import { graphql } from '@/gql'

export const getPromocodes = graphql(`
  query PromocodeFindAll(
    $paginationInput: PaginationInput
    $sort: SortPromocode
    $filter: PromocodeFilter
    $search: String
  ) {
    promocodeFindAll(
      paginationInput: $paginationInput
      sort: $sort
      filter: $filter
      search: $search
    ) {
      data {
        id
        promocodeName
        activated
        amount
        createdAt
        updatedAt
        active
        activatedCount
        Currency {
          id
          code
        }
        userPromocodeCreate {
          id
          username
        }
      }
      metadata {
        prev
        next
      }
    }
  }
`)

export const getOnePromocode = graphql(`
  query PromocodeFindOne($id: Float!) {
    promocodeFindOne(id: $id) {
      id
      promocodeName
      activated
      amount
      createdAt
      updatedAt
      active
      activatedCount
      Currency {
        id
        code
      }
    }
  }
`)

export const createPromocode = graphql(`
  mutation PromocodeCreate($createPromocodeInput: CreatePromocodeDto!) {
    promocodeCreate(createPromocodeInput: $createPromocodeInput) {
      id
      promocodeName
      activated
      amount
      createdAt
      updatedAt
      active
      activatedCount
    }
  }
`)

export const updatePromocode = graphql(`
  mutation PromocodeUpdate($updatePromocodeInput: UpdatePromocodeDto!) {
    promocodeUpdate(updatePromocodeInput: $updatePromocodeInput) {
      id
      promocodeName
      activated
      amount
      createdAt
      updatedAt
      active
      activatedCount
    }
  }
`)

export const deleteOnePromocode = graphql(`
  mutation PromocodeDelete($id: Float!) {
    promocodeDelete(id: $id) {
      id
      promocodeName
      activated
      amount
      createdAt
      updatedAt
      active
      activatedCount
    }
  }
`)

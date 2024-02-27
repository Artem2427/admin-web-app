import { graphql } from '@/gql'

export const rejectTransaction = graphql(`
  mutation AdminRejectTransaction($rejectInput: RejectInput!) {
    adminRejectTransaction(rejectInput: $rejectInput) {
      id
    }
  }
`)

export const approveTransaction = graphql(`
  mutation AdminApproveTransactionManually(
    $approveManuallyInput: ApproveManuallyInput!
  ) {
    adminApproveTransactionManually(
      approveManuallyInput: $approveManuallyInput
    ) {
      id
    }
  }
`)

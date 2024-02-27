/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  mutation SignInAdmin($email: String!, $password: String!) {\n    signInAdmin(signInInput: { email: $email, password: $password }) {\n      isBlocked\n    }\n  }\n':
    types.SignInAdminDocument,
  '\n  mutation LogOut {\n    logout\n  }\n': types.LogOutDocument,
  '\n  mutation RefreshTokens {\n    refreshTokens {\n      accessToken\n    }\n  }\n':
    types.RefreshTokensDocument,
  '\n  query Currencies {\n    currencies {\n      id\n      code\n      type\n    }\n  }\n':
    types.CurrenciesDocument,
  '\n  query PromocodeFindAll(\n    $paginationInput: PaginationInput\n    $sort: SortPromocode\n    $filter: PromocodeFilter\n    $search: String\n  ) {\n    promocodeFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      filter: $filter\n      search: $search\n    ) {\n      data {\n        id\n        promocodeName\n        activated\n        amount\n        createdAt\n        updatedAt\n        active\n        activatedCount\n        Currency {\n          id\n          code\n        }\n        userPromocodeCreate {\n          id\n          username\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n':
    types.PromocodeFindAllDocument,
  '\n  query PromocodeFindOne($id: Float!) {\n    promocodeFindOne(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n      Currency {\n        id\n        code\n      }\n    }\n  }\n':
    types.PromocodeFindOneDocument,
  '\n  mutation PromocodeCreate($createPromocodeInput: CreatePromocodeDto!) {\n    promocodeCreate(createPromocodeInput: $createPromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n':
    types.PromocodeCreateDocument,
  '\n  mutation PromocodeUpdate($updatePromocodeInput: UpdatePromocodeDto!) {\n    promocodeUpdate(updatePromocodeInput: $updatePromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n':
    types.PromocodeUpdateDocument,
  '\n  mutation PromocodeDelete($id: Float!) {\n    promocodeDelete(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n':
    types.PromocodeDeleteDocument,
  '\n  query UserReferrals($input: UserReferralsInput!) {\n    userReferrals(input: $input) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        authProvider\n        isEmailConfirmed\n        muteTimeDuration\n        endBlocking\n        incomes {\n          currency {\n            id\n            code\n            type\n          }\n          balance {\n            amount\n            amountUsd\n            amountRub\n          }\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n':
    types.UserReferralsDocument,
  '\n  mutation UntieReferral($userId: Int!) {\n    untieReferral(userId: $userId) {\n      id\n      referralCode\n      totalBalance\n      createdAt\n      authProvider\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n    }\n  }\n':
    types.UntieReferralDocument,
  '\n  mutation RecalculateUserReferralIncomes($userId: Int!) {\n    recalculateUserReferralIncomes(userId: $userId)\n  }\n':
    types.RecalculateUserReferralIncomesDocument,
  '\n  mutation AdminRejectTransaction($rejectInput: RejectInput!) {\n    adminRejectTransaction(rejectInput: $rejectInput) {\n      id\n    }\n  }\n':
    types.AdminRejectTransactionDocument,
  '\n  mutation AdminApproveTransactionManually(\n    $approveManuallyInput: ApproveManuallyInput!\n  ) {\n    adminApproveTransactionManually(\n      approveManuallyInput: $approveManuallyInput\n    ) {\n      id\n    }\n  }\n':
    types.AdminApproveTransactionManuallyDocument,
  '\n  query Me {\n    me {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n      adminRights {\n        userId\n        accessMask\n        createdAt\n        updatedAt\n      }\n    }\n  }\n':
    types.MeDocument,
  '\n  query AdminFindAll(\n    $paginationInput: PaginationInput!\n    $search: String\n    $sort: UserSortingInput\n  ) {\n    adminFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      search: $search\n    ) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        isBlocked\n        authProvider\n        isEmailConfirmed\n        referrals\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n':
    types.AdminFindAllDocument,
  '\n  query GetPersonalInfo($userId: Int!) {\n    getPersonalInfo(userId: $userId) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      isBlocked\n      authProvider\n      isEmailConfirmed\n      referrals\n      invitedUsername\n      muteTimeDuration\n      endBlocking\n    }\n  }\n':
    types.GetPersonalInfoDocument,
  '\n  query UserWalletHistory($input: HistoryWalletTransactionsInput!) {\n    userWalletHistory(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        amount\n        type\n        status\n        recipient\n        destTag\n        trackerId\n        currencyId\n        userId\n        methodId\n        currencyWalletId\n        createdAt\n        processedAt\n        methodType\n        method {\n          id\n          title\n          currencyType\n          system\n          methodType\n          direction\n          isEnabled\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currencyWallet {\n          id\n          balance\n          address\n          destTag\n          userId\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          isEmailConfirmed\n          authProvider\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n':
    types.UserWalletHistoryDocument,
  '\n  query Admin__loyaltyProgramTransactions(\n    $input: TransactionLoyaltyProgramAdminInput!\n  ) {\n    admin__loyaltyProgramTransactions(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        type\n        amount\n        currencyId\n        createdAt\n        percentage\n        userId\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          authProvider\n          isEmailConfirmed\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n':
    types.Admin__LoyaltyProgramTransactionsDocument,
  '\n  query UserOverview($input: UserOverviewInput!) {\n    userOverview(input: $input) {\n      totalDeposits\n      referralCount\n      betAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      winAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      bonusAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      depositAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      withdrawalAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      ggrAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n    }\n  }\n':
    types.UserOverviewDocument,
  '\n  mutation AdminUpdateUserBalance($updateBalanceDto: UpdateBalanceDto!) {\n    adminUpdateUserBalance(UpdateBalanceDto: $updateBalanceDto) {\n      id\n      balance\n      address\n      destTag\n      userId\n      currencyId\n    }\n  }\n':
    types.AdminUpdateUserBalanceDocument,
  '\n  mutation AdminUpdateUserData($updateUserDataDto: UpdateUserDataDto!) {\n    adminUpdateUserData(UpdateUserDataDto: $updateUserDataDto) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n    }\n  }\n':
    types.AdminUpdateUserDataDocument,
  '\n  mutation BlockUser($userId: Int!) {\n    blockUser(userId: $userId)\n  }\n':
    types.BlockUserDocument,
  '\n  mutation UnBlockUser($userId: Int!) {\n    unBlockUser(userId: $userId)\n  }\n':
    types.UnBlockUserDocument,
  '\n  mutation MuteUser($userId: Int!, $muteTimeDuration: Duration!) {\n    muteUser(userId: $userId, muteTimeDuration: $muteTimeDuration)\n  }\n':
    types.MuteUserDocument,
  '\n  mutation UnMuteUser($userId: Int!) {\n    unMuteUser(userId: $userId)\n  }\n':
    types.UnMuteUserDocument,
  '\n  query CurrencyWallets {\n    currencyWallets {\n      id\n      balance\n      userId\n      currencyId\n      currency {\n        id\n        code\n      }\n    }\n  }\n':
    types.CurrencyWalletsDocument,
  '\n  query UserWallets($userId: Int!) {\n    userWallets(userId: $userId) {\n      id\n      address\n      destTag\n      userId\n      currencyId\n      balance\n      currency {\n        id\n        code\n      }\n    }\n  }\n':
    types.UserWalletsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation SignInAdmin($email: String!, $password: String!) {\n    signInAdmin(signInInput: { email: $email, password: $password }) {\n      isBlocked\n    }\n  }\n',
): (typeof documents)['\n  mutation SignInAdmin($email: String!, $password: String!) {\n    signInAdmin(signInInput: { email: $email, password: $password }) {\n      isBlocked\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation LogOut {\n    logout\n  }\n',
): (typeof documents)['\n  mutation LogOut {\n    logout\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RefreshTokens {\n    refreshTokens {\n      accessToken\n    }\n  }\n',
): (typeof documents)['\n  mutation RefreshTokens {\n    refreshTokens {\n      accessToken\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Currencies {\n    currencies {\n      id\n      code\n      type\n    }\n  }\n',
): (typeof documents)['\n  query Currencies {\n    currencies {\n      id\n      code\n      type\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PromocodeFindAll(\n    $paginationInput: PaginationInput\n    $sort: SortPromocode\n    $filter: PromocodeFilter\n    $search: String\n  ) {\n    promocodeFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      filter: $filter\n      search: $search\n    ) {\n      data {\n        id\n        promocodeName\n        activated\n        amount\n        createdAt\n        updatedAt\n        active\n        activatedCount\n        Currency {\n          id\n          code\n        }\n        userPromocodeCreate {\n          id\n          username\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n',
): (typeof documents)['\n  query PromocodeFindAll(\n    $paginationInput: PaginationInput\n    $sort: SortPromocode\n    $filter: PromocodeFilter\n    $search: String\n  ) {\n    promocodeFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      filter: $filter\n      search: $search\n    ) {\n      data {\n        id\n        promocodeName\n        activated\n        amount\n        createdAt\n        updatedAt\n        active\n        activatedCount\n        Currency {\n          id\n          code\n        }\n        userPromocodeCreate {\n          id\n          username\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query PromocodeFindOne($id: Float!) {\n    promocodeFindOne(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n      Currency {\n        id\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  query PromocodeFindOne($id: Float!) {\n    promocodeFindOne(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n      Currency {\n        id\n        code\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation PromocodeCreate($createPromocodeInput: CreatePromocodeDto!) {\n    promocodeCreate(createPromocodeInput: $createPromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n',
): (typeof documents)['\n  mutation PromocodeCreate($createPromocodeInput: CreatePromocodeDto!) {\n    promocodeCreate(createPromocodeInput: $createPromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation PromocodeUpdate($updatePromocodeInput: UpdatePromocodeDto!) {\n    promocodeUpdate(updatePromocodeInput: $updatePromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n',
): (typeof documents)['\n  mutation PromocodeUpdate($updatePromocodeInput: UpdatePromocodeDto!) {\n    promocodeUpdate(updatePromocodeInput: $updatePromocodeInput) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation PromocodeDelete($id: Float!) {\n    promocodeDelete(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n',
): (typeof documents)['\n  mutation PromocodeDelete($id: Float!) {\n    promocodeDelete(id: $id) {\n      id\n      promocodeName\n      activated\n      amount\n      createdAt\n      updatedAt\n      active\n      activatedCount\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query UserReferrals($input: UserReferralsInput!) {\n    userReferrals(input: $input) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        authProvider\n        isEmailConfirmed\n        muteTimeDuration\n        endBlocking\n        incomes {\n          currency {\n            id\n            code\n            type\n          }\n          balance {\n            amount\n            amountUsd\n            amountRub\n          }\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n',
): (typeof documents)['\n  query UserReferrals($input: UserReferralsInput!) {\n    userReferrals(input: $input) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        authProvider\n        isEmailConfirmed\n        muteTimeDuration\n        endBlocking\n        incomes {\n          currency {\n            id\n            code\n            type\n          }\n          balance {\n            amount\n            amountUsd\n            amountRub\n          }\n        }\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UntieReferral($userId: Int!) {\n    untieReferral(userId: $userId) {\n      id\n      referralCode\n      totalBalance\n      createdAt\n      authProvider\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation UntieReferral($userId: Int!) {\n    untieReferral(userId: $userId) {\n      id\n      referralCode\n      totalBalance\n      createdAt\n      authProvider\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RecalculateUserReferralIncomes($userId: Int!) {\n    recalculateUserReferralIncomes(userId: $userId)\n  }\n',
): (typeof documents)['\n  mutation RecalculateUserReferralIncomes($userId: Int!) {\n    recalculateUserReferralIncomes(userId: $userId)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AdminRejectTransaction($rejectInput: RejectInput!) {\n    adminRejectTransaction(rejectInput: $rejectInput) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation AdminRejectTransaction($rejectInput: RejectInput!) {\n    adminRejectTransaction(rejectInput: $rejectInput) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AdminApproveTransactionManually(\n    $approveManuallyInput: ApproveManuallyInput!\n  ) {\n    adminApproveTransactionManually(\n      approveManuallyInput: $approveManuallyInput\n    ) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  mutation AdminApproveTransactionManually(\n    $approveManuallyInput: ApproveManuallyInput!\n  ) {\n    adminApproveTransactionManually(\n      approveManuallyInput: $approveManuallyInput\n    ) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Me {\n    me {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n      adminRights {\n        userId\n        accessMask\n        createdAt\n        updatedAt\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Me {\n    me {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n      anonymity {\n        id\n        userId\n        local\n        server\n        createdAt\n        updatedAt\n      }\n      adminRights {\n        userId\n        accessMask\n        createdAt\n        updatedAt\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query AdminFindAll(\n    $paginationInput: PaginationInput!\n    $search: String\n    $sort: UserSortingInput\n  ) {\n    adminFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      search: $search\n    ) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        isBlocked\n        authProvider\n        isEmailConfirmed\n        referrals\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n',
): (typeof documents)['\n  query AdminFindAll(\n    $paginationInput: PaginationInput!\n    $search: String\n    $sort: UserSortingInput\n  ) {\n    adminFindAll(\n      paginationInput: $paginationInput\n      sort: $sort\n      search: $search\n    ) {\n      data {\n        id\n        email\n        username\n        referralCode\n        totalBalance\n        socialId\n        avatarLink\n        createdAt\n        isBlocked\n        authProvider\n        isEmailConfirmed\n        referrals\n      }\n      metadata {\n        prev\n        next\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPersonalInfo($userId: Int!) {\n    getPersonalInfo(userId: $userId) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      isBlocked\n      authProvider\n      isEmailConfirmed\n      referrals\n      invitedUsername\n      muteTimeDuration\n      endBlocking\n    }\n  }\n',
): (typeof documents)['\n  query GetPersonalInfo($userId: Int!) {\n    getPersonalInfo(userId: $userId) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      isBlocked\n      authProvider\n      isEmailConfirmed\n      referrals\n      invitedUsername\n      muteTimeDuration\n      endBlocking\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query UserWalletHistory($input: HistoryWalletTransactionsInput!) {\n    userWalletHistory(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        amount\n        type\n        status\n        recipient\n        destTag\n        trackerId\n        currencyId\n        userId\n        methodId\n        currencyWalletId\n        createdAt\n        processedAt\n        methodType\n        method {\n          id\n          title\n          currencyType\n          system\n          methodType\n          direction\n          isEnabled\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currencyWallet {\n          id\n          balance\n          address\n          destTag\n          userId\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          isEmailConfirmed\n          authProvider\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query UserWalletHistory($input: HistoryWalletTransactionsInput!) {\n    userWalletHistory(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        amount\n        type\n        status\n        recipient\n        destTag\n        trackerId\n        currencyId\n        userId\n        methodId\n        currencyWalletId\n        createdAt\n        processedAt\n        methodType\n        method {\n          id\n          title\n          currencyType\n          system\n          methodType\n          direction\n          isEnabled\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currencyWallet {\n          id\n          balance\n          address\n          destTag\n          userId\n          currencyId\n          currency {\n            id\n            code\n            type\n          }\n        }\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          isEmailConfirmed\n          authProvider\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Admin__loyaltyProgramTransactions(\n    $input: TransactionLoyaltyProgramAdminInput!\n  ) {\n    admin__loyaltyProgramTransactions(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        type\n        amount\n        currencyId\n        createdAt\n        percentage\n        userId\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          authProvider\n          isEmailConfirmed\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Admin__loyaltyProgramTransactions(\n    $input: TransactionLoyaltyProgramAdminInput!\n  ) {\n    admin__loyaltyProgramTransactions(input: $input) {\n      metadata {\n        prev\n        next\n      }\n      data {\n        id\n        type\n        amount\n        currencyId\n        createdAt\n        percentage\n        userId\n        currency {\n          id\n          code\n          type\n        }\n        user {\n          username\n          id\n          referralCode\n          totalBalance\n          createdAt\n          authProvider\n          isEmailConfirmed\n          anonymity {\n            id\n            userId\n            local\n            server\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query UserOverview($input: UserOverviewInput!) {\n    userOverview(input: $input) {\n      totalDeposits\n      referralCount\n      betAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      winAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      bonusAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      depositAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      withdrawalAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      ggrAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query UserOverview($input: UserOverviewInput!) {\n    userOverview(input: $input) {\n      totalDeposits\n      referralCount\n      betAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      winAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      bonusAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      depositAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      withdrawalAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n      ggrAmounts {\n        currency {\n          id\n          code\n          type\n        }\n        balance {\n          amount\n          amountUsd\n          amountRub\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AdminUpdateUserBalance($updateBalanceDto: UpdateBalanceDto!) {\n    adminUpdateUserBalance(UpdateBalanceDto: $updateBalanceDto) {\n      id\n      balance\n      address\n      destTag\n      userId\n      currencyId\n    }\n  }\n',
): (typeof documents)['\n  mutation AdminUpdateUserBalance($updateBalanceDto: UpdateBalanceDto!) {\n    adminUpdateUserBalance(UpdateBalanceDto: $updateBalanceDto) {\n      id\n      balance\n      address\n      destTag\n      userId\n      currencyId\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation AdminUpdateUserData($updateUserDataDto: UpdateUserDataDto!) {\n    adminUpdateUserData(UpdateUserDataDto: $updateUserDataDto) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n    }\n  }\n',
): (typeof documents)['\n  mutation AdminUpdateUserData($updateUserDataDto: UpdateUserDataDto!) {\n    adminUpdateUserData(UpdateUserDataDto: $updateUserDataDto) {\n      id\n      email\n      username\n      referralCode\n      totalBalance\n      socialId\n      avatarLink\n      createdAt\n      authProvider\n      isEmailConfirmed\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation BlockUser($userId: Int!) {\n    blockUser(userId: $userId)\n  }\n',
): (typeof documents)['\n  mutation BlockUser($userId: Int!) {\n    blockUser(userId: $userId)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UnBlockUser($userId: Int!) {\n    unBlockUser(userId: $userId)\n  }\n',
): (typeof documents)['\n  mutation UnBlockUser($userId: Int!) {\n    unBlockUser(userId: $userId)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation MuteUser($userId: Int!, $muteTimeDuration: Duration!) {\n    muteUser(userId: $userId, muteTimeDuration: $muteTimeDuration)\n  }\n',
): (typeof documents)['\n  mutation MuteUser($userId: Int!, $muteTimeDuration: Duration!) {\n    muteUser(userId: $userId, muteTimeDuration: $muteTimeDuration)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation UnMuteUser($userId: Int!) {\n    unMuteUser(userId: $userId)\n  }\n',
): (typeof documents)['\n  mutation UnMuteUser($userId: Int!) {\n    unMuteUser(userId: $userId)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query CurrencyWallets {\n    currencyWallets {\n      id\n      balance\n      userId\n      currencyId\n      currency {\n        id\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  query CurrencyWallets {\n    currencyWallets {\n      id\n      balance\n      userId\n      currencyId\n      currency {\n        id\n        code\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query UserWallets($userId: Int!) {\n    userWallets(userId: $userId) {\n      id\n      address\n      destTag\n      userId\n      currencyId\n      balance\n      currency {\n        id\n        code\n      }\n    }\n  }\n',
): (typeof documents)['\n  query UserWallets($userId: Int!) {\n    userWallets(userId: $userId) {\n      id\n      address\n      destTag\n      userId\n      currencyId\n      balance\n      currency {\n        id\n        code\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
  /** Custom scalar type for Decimal */
  Decimal: { input: any; output: any }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any }
}

export type AdminLogsEntity = {
  __typename?: 'AdminLogsEntity'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  message: Scalars['String']['output']
  user: UserEntity
}

export type AdminLogsFilter = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type AdminLogsPaginatedResponse = {
  __typename?: 'AdminLogsPaginatedResponse'
  data: Array<AdminLogsEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type AdminRightsEntity = {
  __typename?: 'AdminRightsEntity'
  accessMask: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['Int']['output']
}

export type AdminsPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  searchTerm?: InputMaybe<Scalars['String']['input']>
}

export type AnonymityEntity = {
  __typename?: 'AnonymityEntity'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  local: Scalars['Boolean']['output']
  server: Scalars['Boolean']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['Int']['output']
}

export type ApproveAutomaticallyInput = {
  id: Scalars['String']['input']
  paymentWithdrawalMethodId: Scalars['Int']['input']
}

export type ApproveManuallyInput = {
  id: Scalars['String']['input']
}

export enum AuthProviderType {
  Email = 'Email',
  Google = 'Google',
  Tg = 'TG',
  Vk = 'VK',
}

export type AvailableWithdrawalEntity = {
  __typename?: 'AvailableWithdrawalEntity'
  balance: Scalars['Decimal']['output']
  currency: CurrencyEntity
}

export type BaseOverviewInput = {
  from: Scalars['DateTime']['input']
  to: Scalars['DateTime']['input']
}

export type BoostEntity = {
  __typename?: 'BoostEntity'
  boost: Scalars['Decimal']['output']
  currencyCode: CurrencyCode
}

export type BoostInfoEntity = {
  __typename?: 'BoostInfoEntity'
  monthlyBoost: Array<BoostEntity>
  monthlyPercentage: Scalars['Float']['output']
  timeToEndMonthlyJob?: Maybe<Scalars['String']['output']>
  timeToEndWeeklyJob?: Maybe<Scalars['String']['output']>
  weeklyBoost: Array<BoostEntity>
  weeklyPercentage: Scalars['Float']['output']
}

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input']
  oldPassword: Scalars['String']['input']
}

export type ChartReportEntity = {
  __typename?: 'ChartReportEntity'
  details: Array<CurrencyStatisticEntity>
  partition: Scalars['Int']['output']
}

export enum CommissionType {
  Fixed = 'fixed',
  Percentage = 'percentage',
}

export type CreateCryptoAddressInput = {
  currencyCode: CryptoCurrencyCode
}

export type CreatePromocodeDto = {
  activated: Scalars['Int']['input']
  active?: Scalars['Boolean']['input']
  amount: Scalars['Float']['input']
  currencyId: Scalars['Int']['input']
  promocodeName: Scalars['String']['input']
}

export type CreatedSessionEntity = {
  __typename?: 'CreatedSessionEntity'
  launch_options: LaunchOptionsEntity
}

export enum CryptoCurrencyCode {
  Ada = 'ADA',
  Bch = 'BCH',
  Bnb = 'BNB',
  Btc = 'BTC',
  Btg = 'BTG',
  Cro = 'CRO',
  Daierc = 'DAIERC',
  Dash = 'DASH',
  Doge = 'DOGE',
  Eos = 'EOS',
  Etc = 'ETC',
  Eth = 'ETH',
  Ltc = 'LTC',
  Shib = 'SHIB',
  Sol = 'SOL',
  Trx = 'TRX',
  Usdctrc = 'USDCTRC',
  Usdp = 'USDP',
  Usdtbsc = 'USDTBSC',
  Usdterc = 'USDTERC',
  Usdttrc = 'USDTTRC',
  Xlm = 'XLM',
  Xmr = 'XMR',
  Xrp = 'XRP',
  Xtz = 'XTZ',
  Zec = 'ZEC',
}

export type CurrencyAmountEntity = {
  __typename?: 'CurrencyAmountEntity'
  amount: Scalars['Decimal']['output']
  amountRub: Scalars['Decimal']['output']
  amountUsd: Scalars['Decimal']['output']
}

export enum CurrencyCode {
  Ada = 'ADA',
  Bch = 'BCH',
  Bnb = 'BNB',
  Btc = 'BTC',
  Btg = 'BTG',
  Cro = 'CRO',
  Daierc = 'DAIERC',
  Dash = 'DASH',
  Doge = 'DOGE',
  Eos = 'EOS',
  Etc = 'ETC',
  Eth = 'ETH',
  Ltc = 'LTC',
  Rub = 'RUB',
  Shib = 'SHIB',
  Sol = 'SOL',
  Trx = 'TRX',
  Usd = 'USD',
  Usdctrc = 'USDCTRC',
  Usdp = 'USDP',
  Usdtbsc = 'USDTBSC',
  Usdterc = 'USDTERC',
  Usdttrc = 'USDTTRC',
  Xlm = 'XLM',
  Xmr = 'XMR',
  Xrp = 'XRP',
  Xtz = 'XTZ',
  Zec = 'ZEC',
}

export type CurrencyEntity = {
  __typename?: 'CurrencyEntity'
  code: CurrencyCode
  id: Scalars['Int']['output']
  type: CurrencyType
}

export type CurrencyStatisticEntity = {
  __typename?: 'CurrencyStatisticEntity'
  balance?: Maybe<CurrencyAmountEntity>
  currency: CurrencyEntity
}

export enum CurrencyType {
  Crypto = 'crypto',
  Fiat = 'fiat',
}

export type CurrencyWalletEntity = {
  __typename?: 'CurrencyWalletEntity'
  address?: Maybe<Scalars['String']['output']>
  balance: Scalars['Decimal']['output']
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  destTag?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  userId: Scalars['Int']['output']
}

export type DepositInput = {
  amount: Scalars['Decimal']['input']
  paymentWithdrawalMethodId: Scalars['Int']['input']
}

export type DepositOutputEntity = {
  __typename?: 'DepositOutputEntity'
  address?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export enum Direction {
  Payment = 'payment',
  Withdrawal = 'withdrawal',
}

export enum Duration {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneHour = 'ONE_HOUR',
  ThirtyMinutes = 'THIRTY_MINUTES',
}

export type FavoriteGameEntity = {
  __typename?: 'FavoriteGameEntity'
  game: GameEntity
  userId: Scalars['Float']['output']
}

export type FilterAllTransaction = {
  statuses?: InputMaybe<Array<TransactionStatus>>
  type?: InputMaybe<TransactionType>
}

export type FilterGetTransactionUser = {
  type?: InputMaybe<TransactionType>
}

export type FilterPaymentWithdrawalMethods = {
  currencyId?: InputMaybe<Scalars['Int']['input']>
  currencyType?: InputMaybe<CurrencyType>
  direction?: InputMaybe<Direction>
}

export type GameEntity = {
  __typename?: 'GameEntity'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  identifier: Scalars['String']['output']
  identifier2?: Maybe<Scalars['String']['output']>
  payout: Scalars['Float']['output']
  producer: ProducerEntity
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  urlImage: GameImageUrls
}

export type GameHistoriesPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
}

export type GameHistoriesSortingInput = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

export type GameHistoryEntity = {
  __typename?: 'GameHistoryEntity'
  betAmount: Scalars['Decimal']['output']
  currency: CurrencyEntity
  finished: Scalars['Boolean']['output']
  game: Scalars['String']['output']
  gameTitle: Scalars['String']['output']
  id: Scalars['String']['output']
  isWon: Scalars['Boolean']['output']
  multiplier: Scalars['Decimal']['output']
  result: Scalars['Decimal']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['Float']['output']
  winAmount: Scalars['Decimal']['output']
}

export type GameHistoryPaginatedResponse = {
  __typename?: 'GameHistoryPaginatedResponse'
  data: Array<GameHistoryEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type GameImageSize = {
  __typename?: 'GameImageSize'
  size: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
}

export type GameImageUrls = {
  __typename?: 'GameImageUrls'
  s1: GameImageSize
  s2: GameImageSize
  s3: GameImageSize
  s4: GameImageSize
}

export type GamesFilterInput = {
  key: Scalars['String']['input']
  value: Scalars['String']['input']
}

export type GamesInFilterInput = {
  key: Scalars['String']['input']
  value: Array<Scalars['String']['input']>
}

export type GamesPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  searchTerm?: InputMaybe<Scalars['String']['input']>
}

export type GamesPaginationResponse = {
  __typename?: 'GamesPaginationResponse'
  countGames: Scalars['String']['output']
  data: Array<GameEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type GamesSortingInput = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

export type GlobalOverviewEntity = {
  __typename?: 'GlobalOverviewEntity'
  betAmounts: Array<CurrencyStatisticEntity>
  bonusAmounts: Array<CurrencyStatisticEntity>
  depositAmounts: Array<CurrencyStatisticEntity>
  firstDeposits: Scalars['Int']['output']
  ggrAmounts: Array<CurrencyStatisticEntity>
  repeatedDeposits: Scalars['Int']['output']
  totalDeposits: Scalars['Int']['output']
  winAmounts: Array<CurrencyStatisticEntity>
  withdrawalAmounts: Array<CurrencyStatisticEntity>
}

export type HistoryWalletTransactionsInput = {
  filter?: InputMaybe<FilterAllTransaction>
  paginationInput?: InputMaybe<PaginationInput>
  searchTerm?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['Int']['input']>
}

export type LastCredentialsEntity = {
  __typename?: 'LastCredentialsEntity'
  currencyWalletId: Scalars['Float']['output']
  destTag?: Maybe<Scalars['String']['output']>
  methodType: Scalars['String']['output']
  recipient: Scalars['String']['output']
}

export type LaunchOptionsEntity = {
  __typename?: 'LaunchOptionsEntity'
  game_url: Scalars['String']['output']
  strategy: Scalars['String']['output']
}

export type LevelEntity = {
  __typename?: 'LevelEntity'
  id: Scalars['Int']['output']
  levelBonus: Scalars['Int']['output']
  levelName: Scalars['String']['output']
  maxExperiencePoints: Scalars['Int']['output']
  minExperiencePoints: Scalars['Int']['output']
  nextLevelId?: Maybe<Scalars['Int']['output']>
}

export enum LoyaltyType {
  LevelBonus = 'LevelBonus',
  Promocode = 'Promocode',
  Rakeback = 'Rakeback',
  ReloadMonthly = 'ReloadMonthly',
  WeeklyBoost = 'WeeklyBoost',
}

export enum MethodType {
  Ada = 'ADA',
  Bch = 'BCH',
  Bnb = 'BNB',
  Btc = 'BTC',
  Btg = 'BTG',
  Cro = 'CRO',
  Card = 'Card',
  Daierc = 'DAIERC',
  Dash = 'DASH',
  Doge = 'DOGE',
  Eos = 'EOS',
  Etc = 'ETC',
  Eth = 'ETH',
  FkWallet = 'FKWallet',
  Ltc = 'LTC',
  Piastrix = 'Piastrix',
  Qiwi = 'Qiwi',
  Sbp = 'SBP',
  Shib = 'SHIB',
  Sol = 'SOL',
  Trx = 'TRX',
  Usdctrc = 'USDCTRC',
  Usdp = 'USDP',
  Usdtbsc = 'USDTBSC',
  Usdterc = 'USDTERC',
  Usdttrc = 'USDTTRC',
  Xlm = 'XLM',
  Xmr = 'XMR',
  Xrp = 'XRP',
  Xtz = 'XTZ',
  Yoomoney = 'Yoomoney',
  Zec = 'ZEC',
}

export type Mutation = {
  __typename?: 'Mutation'
  abortActiveWithdrawal: TransactionPaymentEntity
  addFavoriteGame: FavoriteGameEntity
  addOrChangeEmail: Scalars['Boolean']['output']
  adminApproveTransactionAutomatically: TransactionPaymentEntity
  adminApproveTransactionManually: TransactionPaymentEntity
  adminRejectTransaction: TransactionPaymentEntity
  adminUpdateUserBalance: CurrencyWalletEntity
  adminUpdateUserData: UserEntity
  approveAutomaticallyMultiple: Scalars['Boolean']['output']
  bannedUser: Scalars['Boolean']['output']
  blockUser: Scalars['Boolean']['output']
  changePassword: Scalars['Boolean']['output']
  changeUsername: Scalars['Boolean']['output']
  createCryptoAddress: CurrencyWalletEntity
  deleteAvatar: Scalars['Boolean']['output']
  deleteChatMessage: Scalars['Boolean']['output']
  deposit: DepositOutputEntity
  loadGames: Scalars['Float']['output']
  logout: Scalars['Boolean']['output']
  muteUser: Scalars['Boolean']['output']
  promocodeCreate: PromocodeEntity
  promocodeDelete: PromocodeEntity
  promocodeUpdate: PromocodeEntity
  recalculateUserReferralIncomes: Scalars['Boolean']['output']
  recoveryPassword: Scalars['Boolean']['output']
  refreshTokens: RefreshEntity
  removeFavoriteGame: FavoriteGameEntity
  removeUser: UserEntity
  resendVerifyCode: Scalars['Boolean']['output']
  revokeAdminPermissions: Scalars['Boolean']['output']
  sendMailForRecoveryPassword: Scalars['Boolean']['output']
  signIn: SignInDto
  signInAdmin: SignInDto
  signUp: Scalars['Boolean']['output']
  unBlockUser: Scalars['Boolean']['output']
  unMuteUser: Scalars['Boolean']['output']
  untieReferral: UserEntity
  updateAnonymity: AnonymityEntity
  updateAvatar: Scalars['Boolean']['output']
  updateGameImages: Scalars['Boolean']['output']
  updateProviderGameImages: Scalars['Boolean']['output']
  updateUser: UserEntity
  updateUserPermissions: Scalars['Boolean']['output']
  usePromocode: Scalars['Boolean']['output']
  verifyCode: Scalars['Boolean']['output']
  withdrawBonus: Scalars['Boolean']['output']
  withdrawRakeBake: Array<RakebackWithdrawalEntity>
  withdrawReferralBalance: Scalars['Boolean']['output']
  withdrawal: WithdrawalOutputEntity
}

export type MutationAddFavoriteGameArgs = {
  gameId: Scalars['String']['input']
}

export type MutationAddOrChangeEmailArgs = {
  email: Scalars['String']['input']
}

export type MutationAdminApproveTransactionAutomaticallyArgs = {
  approveAutomaticallyInput: ApproveAutomaticallyInput
}

export type MutationAdminApproveTransactionManuallyArgs = {
  approveManuallyInput: ApproveManuallyInput
}

export type MutationAdminRejectTransactionArgs = {
  rejectInput: RejectInput
}

export type MutationAdminUpdateUserBalanceArgs = {
  UpdateBalanceDto: UpdateBalanceDto
}

export type MutationAdminUpdateUserDataArgs = {
  UpdateUserDataDto: UpdateUserDataDto
}

export type MutationApproveAutomaticallyMultipleArgs = {
  approvalDetails: Array<ApproveAutomaticallyInput>
}

export type MutationBannedUserArgs = {
  userId: Scalars['Int']['input']
}

export type MutationBlockUserArgs = {
  userId: Scalars['Int']['input']
}

export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput
}

export type MutationChangeUsernameArgs = {
  userName: Scalars['String']['input']
}

export type MutationCreateCryptoAddressArgs = {
  createCryptoAddressInput: CreateCryptoAddressInput
}

export type MutationDeleteChatMessageArgs = {
  id: Scalars['String']['input']
}

export type MutationDepositArgs = {
  depositInput: DepositInput
}

export type MutationMuteUserArgs = {
  muteTimeDuration: Duration
  userId: Scalars['Int']['input']
}

export type MutationPromocodeCreateArgs = {
  createPromocodeInput: CreatePromocodeDto
}

export type MutationPromocodeDeleteArgs = {
  id: Scalars['Float']['input']
}

export type MutationPromocodeUpdateArgs = {
  updatePromocodeInput: UpdatePromocodeDto
}

export type MutationRecalculateUserReferralIncomesArgs = {
  userId: Scalars['Int']['input']
}

export type MutationRecoveryPasswordArgs = {
  data: RecoveryPasswordDataInput
}

export type MutationRemoveFavoriteGameArgs = {
  gameId: Scalars['String']['input']
}

export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input']
}

export type MutationRevokeAdminPermissionsArgs = {
  userId: Scalars['Int']['input']
}

export type MutationSendMailForRecoveryPasswordArgs = {
  email: Scalars['String']['input']
}

export type MutationSignInArgs = {
  signInInput: SignInInput
}

export type MutationSignInAdminArgs = {
  signInInput: SignInInput
}

export type MutationSignUpArgs = {
  signUpInput: SignUpInput
}

export type MutationUnBlockUserArgs = {
  userId: Scalars['Int']['input']
}

export type MutationUnMuteUserArgs = {
  userId: Scalars['Int']['input']
}

export type MutationUntieReferralArgs = {
  userId: Scalars['Int']['input']
}

export type MutationUpdateAnonymityArgs = {
  updateAnonymityInput: UpdateAnonymityInput
}

export type MutationUpdateAvatarArgs = {
  avatar: Scalars['Upload']['input']
}

export type MutationUpdateProviderGameImagesArgs = {
  slug: Scalars['String']['input']
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateUserPermissionsArgs = {
  updateInput: UpdatePermissionsInput
}

export type MutationUsePromocodeArgs = {
  promocodeName: Scalars['String']['input']
}

export type MutationVerifyCodeArgs = {
  verifyCodeInput: VerifyCodeInput
}

export type MutationWithdrawBonusArgs = {
  currencyCode: CurrencyCode
}

export type MutationWithdrawalArgs = {
  withdrawalInput: WithdrawalInput
}

export type PaginatedUserReferralsResponse = {
  __typename?: 'PaginatedUserReferralsResponse'
  data: Array<ReferralUserEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type PaginatedUsersEntity = {
  __typename?: 'PaginatedUsersEntity'
  data: Array<UserEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type PaginationArgsDto = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  filter?: InputMaybe<AdminLogsFilter>
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<SortAdminLogs>
}

/** Пагинация */
export type PaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
}

export type PaginationMetadataWithNextEntity = {
  __typename?: 'PaginationMetadataWithNextEntity'
  next: Scalars['Boolean']['output']
  prev: Scalars['Boolean']['output']
}

export type PaginationReferralTransactionResponse = {
  __typename?: 'PaginationReferralTransactionResponse'
  data: Array<ReferralTransactionEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type PaginationTransactionLoyaltyProgram = {
  __typename?: 'PaginationTransactionLoyaltyProgram'
  data: Array<TransactionLoyaltyProgramEntity>
  metadata: PaginationMetadataWithNextEntity
}

export enum PaymentSystem {
  Aifory = 'Aifory',
  Exnode = 'Exnode',
  FreeKassa = 'FreeKassa',
  Piastrix = 'Piastrix',
  Rubpay = 'Rubpay',
  Skypay = 'Skypay',
}

export type PaymentWithdrawalMethodsEntity = {
  __typename?: 'PaymentWithdrawalMethodsEntity'
  commissionIn?: Maybe<Scalars['Decimal']['output']>
  commissionOut?: Maybe<Scalars['Decimal']['output']>
  commissionType?: Maybe<CommissionType>
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  currencyType: CurrencyType
  direction: Direction
  id: Scalars['Int']['output']
  isEnabled: Scalars['Boolean']['output']
  maxDeposit?: Maybe<Scalars['Decimal']['output']>
  maxWithdraw?: Maybe<Scalars['Decimal']['output']>
  methodType: MethodType
  minDeposit?: Maybe<Scalars['Decimal']['output']>
  minWithdraw?: Maybe<Scalars['Decimal']['output']>
  system: PaymentSystem
  title: Scalars['String']['output']
}

export type ProducerEntity = {
  __typename?: 'ProducerEntity'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  provider: ProviderEntity
  slug: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ProducerWithCountEntity = {
  __typename?: 'ProducerWithCountEntity'
  createdAt: Scalars['DateTime']['output']
  gameCount: Scalars['Float']['output']
  id: Scalars['String']['output']
  providerId: Scalars['String']['output']
  slug: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type PromocodeEntity = {
  __typename?: 'PromocodeEntity'
  Currency: CurrencyEntity
  activated: Scalars['Int']['output']
  activatedCount: Scalars['Int']['output']
  active: Scalars['Boolean']['output']
  amount: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  promocodeName: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  userPromocodeCreate: UserEntity
}

export type PromocodeFilter = {
  currencyId?: InputMaybe<Scalars['Float']['input']>
}

export type PromocodePaginatedResponse = {
  __typename?: 'PromocodePaginatedResponse'
  data: Array<PromocodeEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type PromocodeWithoutUserCreatedEntity = {
  __typename?: 'PromocodeWithoutUserCreatedEntity'
  Currency: CurrencyEntity
  activated: Scalars['Int']['output']
  activatedCount: Scalars['Int']['output']
  active: Scalars['Boolean']['output']
  amount: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  promocodeName: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type ProviderEntity = {
  __typename?: 'ProviderEntity'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  slug: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type Query = {
  __typename?: 'Query'
  adminFindAll: UserPaginationResponseWithNext
  adminGetWithdrawalMethodsForTransaction: Array<PaymentWithdrawalMethodsEntity>
  adminLogs: AdminLogsPaginatedResponse
  adminSearch?: Maybe<UserEntity>
  admin__loyaltyProgramTransactions: PaginationTransactionLoyaltyProgram
  admins: PaginatedUsersEntity
  createGameDemo: CreatedSessionEntity
  createSession: CreatedSessionEntity
  currencies: Array<CurrencyEntity>
  currency: CurrencyEntity
  currencyWallet: CurrencyWalletEntity
  currencyWallets: Array<CurrencyWalletEntity>
  favoriteUserGames: Array<GameEntity>
  findOne: UserEntity
  game: GameEntity
  games: GamesPaginationResponse
  getActiveWithdrawal?: Maybe<TransactionPaymentEntity>
  getHistoryPromocode: Array<UserPromocodeUsedEntity>
  getInfoBoost: BoostInfoEntity
  getLastWithdrawalCredentials?: Maybe<LastCredentialsEntity>
  getPersonalInfo?: Maybe<UserPersonalInfoEntity>
  getReferralProgramStatistics: ReferralProgramStatisticEntity
  getTransactionUser: Array<TransactionPaymentEntity>
  getUserLevel: UserLevelEntity
  globalOverview: GlobalOverviewEntity
  headersGames: GamesPaginationResponse
  loyaltyProgramTransactions: PaginationTransactionLoyaltyProgram
  me: UserEntity
  myAnonymity: AnonymityEntity
  myGameHistories: GameHistoryPaginatedResponse
  myRakeBacks: RakebacksEntity
  myReferralBalance: Array<ReferralBalanceEntity>
  paymentWithdrawalMethods: Array<PaymentWithdrawalMethodsEntity>
  popularGames: Array<GameEntity>
  producers: Array<ProducerWithCountEntity>
  promocodeFindAll: PromocodePaginatedResponse
  promocodeFindOne: PromocodeEntity
  recommendedGame: GamesPaginationResponse
  referralCashoutHistory: PaginationReferralTransactionResponse
  referralsOverview: ReferralsOverviewEntity
  userBetAmountReport: Array<ChartReportEntity>
  userBonusAmountReport: Array<ChartReportEntity>
  userDepositAmountReport: Array<ChartReportEntity>
  userGgrAmountReport: Array<ChartReportEntity>
  userOverview: UserOverviewEntity
  userReferrals: PaginatedUserReferralsResponse
  userWalletHistory: TransactionPaymentPaginatedResponse
  userWallets: Array<CurrencyWalletEntity>
  userWinAmountReport: Array<ChartReportEntity>
  userWithdrawalAmountReport: Array<ChartReportEntity>
}

export type QueryAdminFindAllArgs = {
  paginationInput: PaginationInput
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<UserSortingInput>
}

export type QueryAdminGetWithdrawalMethodsForTransactionArgs = {
  transactionId: Scalars['String']['input']
}

export type QueryAdminLogsArgs = {
  PaginationArgsDto: PaginationArgsDto
}

export type QueryAdminSearchArgs = {
  searchInput: SearchInput
}

export type QueryAdmin__LoyaltyProgramTransactionsArgs = {
  input: TransactionLoyaltyProgramAdminInput
}

export type QueryAdminsArgs = {
  paginationArgs: AdminsPaginationInput
}

export type QueryCreateGameDemoArgs = {
  clientType: Scalars['String']['input']
  game: Scalars['String']['input']
}

export type QueryCreateSessionArgs = {
  clientType: Scalars['String']['input']
  currCode: Scalars['String']['input']
  game: Scalars['String']['input']
}

export type QueryFindOneArgs = {
  id: Scalars['Int']['input']
}

export type QueryGameArgs = {
  identifier: Scalars['String']['input']
}

export type QueryGamesArgs = {
  filter?: InputMaybe<GamesFilterInput>
  filterIn?: InputMaybe<GamesInFilterInput>
  paginationInput?: InputMaybe<GamesPaginationInput>
  sort?: InputMaybe<GamesSortingInput>
}

export type QueryGetPersonalInfoArgs = {
  userId: Scalars['Int']['input']
}

export type QueryGetReferralProgramStatisticsArgs = {
  userId: Scalars['Int']['input']
}

export type QueryGetTransactionUserArgs = {
  filter?: InputMaybe<FilterGetTransactionUser>
}

export type QueryGlobalOverviewArgs = {
  input: BaseOverviewInput
}

export type QueryHeadersGamesArgs = {
  paginationInput?: InputMaybe<GamesPaginationInput>
  sort?: InputMaybe<GamesSortingInput>
}

export type QueryLoyaltyProgramTransactionsArgs = {
  input: TransactionLoyaltyProgramInput
}

export type QueryMyGameHistoriesArgs = {
  pagination: GameHistoriesPaginationInput
  sort?: InputMaybe<GameHistoriesSortingInput>
}

export type QueryPaymentWithdrawalMethodsArgs = {
  filter?: InputMaybe<FilterPaymentWithdrawalMethods>
}

export type QueryPromocodeFindAllArgs = {
  filter?: InputMaybe<PromocodeFilter>
  paginationInput?: InputMaybe<PaginationInput>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<SortPromocode>
}

export type QueryPromocodeFindOneArgs = {
  id: Scalars['Float']['input']
}

export type QueryRecommendedGameArgs = {
  identifier: Scalars['String']['input']
}

export type QueryReferralCashoutHistoryArgs = {
  paginationInput: PaginationInput
}

export type QueryReferralsOverviewArgs = {
  input: ReferralsOverviewInput
}

export type QueryUserBetAmountReportArgs = {
  input: UserOverviewInput
}

export type QueryUserBonusAmountReportArgs = {
  input: UserOverviewInput
}

export type QueryUserDepositAmountReportArgs = {
  input: UserOverviewInput
}

export type QueryUserGgrAmountReportArgs = {
  input: UserOverviewInput
}

export type QueryUserOverviewArgs = {
  input: UserOverviewInput
}

export type QueryUserReferralsArgs = {
  input: UserReferralsInput
}

export type QueryUserWalletHistoryArgs = {
  input: HistoryWalletTransactionsInput
}

export type QueryUserWalletsArgs = {
  userId: Scalars['Int']['input']
}

export type QueryUserWinAmountReportArgs = {
  input: UserOverviewInput
}

export type QueryUserWithdrawalAmountReportArgs = {
  input: UserOverviewInput
}

export type RakebackEntity = {
  __typename?: 'RakebackEntity'
  balance: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['Int']['output']
}

export type RakebackWithdrawalEntity = {
  __typename?: 'RakebackWithdrawalEntity'
  rakeback: RakebackEntity
  wallet: CurrencyWalletEntity
}

export type RakebacksEntity = {
  __typename?: 'RakebacksEntity'
  myRakebacks: Array<RakebackEntity>
  rakebackPercentage: Scalars['Int']['output']
}

export type RecoveryPasswordDataInput = {
  hash: Scalars['String']['input']
  newPassword: Scalars['String']['input']
  repeatPassword: Scalars['String']['input']
}

export type ReferralBalanceEntity = {
  __typename?: 'ReferralBalanceEntity'
  balance: Scalars['Decimal']['output']
  claimedAmount: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  userId: Scalars['Int']['output']
}

export type ReferralProgramStatisticEntity = {
  __typename?: 'ReferralProgramStatisticEntity'
  bets: Scalars['Int']['output']
  referrals: Scalars['Int']['output']
  wagered: Array<ReferralProgramWageredEntity>
}

export type ReferralProgramWageredEntity = {
  __typename?: 'ReferralProgramWageredEntity'
  balance: Scalars['Decimal']['output']
  currency: CurrencyEntity
}

export type ReferralTransactionEntity = {
  __typename?: 'ReferralTransactionEntity'
  amount: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  currency: CurrencyEntity
  id: Scalars['String']['output']
  percentage: Scalars['Float']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ReferralUserEntity = {
  __typename?: 'ReferralUserEntity'
  adminRights?: Maybe<AdminRightsEntity>
  anonymity?: Maybe<AnonymityEntity>
  authProvider: AuthProviderType
  avatarLink?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email?: Maybe<Scalars['String']['output']>
  endBlocking?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  incomes: Array<CurrencyStatisticEntity>
  isEmailConfirmed: Scalars['Boolean']['output']
  muteTimeDuration?: Maybe<Scalars['Int']['output']>
  referralCode: Scalars['String']['output']
  socialId?: Maybe<Scalars['String']['output']>
  totalBalance: Scalars['Decimal']['output']
  username?: Maybe<Scalars['String']['output']>
}

export type ReferralsOverviewEntity = {
  __typename?: 'ReferralsOverviewEntity'
  availableWithdrawals: Array<AvailableWithdrawalEntity>
  betAmounts: Array<CurrencyStatisticEntity>
  bonusAmounts: Array<CurrencyStatisticEntity>
  depositAmounts: Array<CurrencyStatisticEntity>
  firstDeposits: Scalars['Int']['output']
  ggrAmounts: Array<CurrencyStatisticEntity>
  profitAmounts: Array<CurrencyStatisticEntity>
  referralCount: Scalars['Int']['output']
  repeatedDeposits: Scalars['Int']['output']
  totalDeposits: Scalars['Int']['output']
  winAmounts: Array<CurrencyStatisticEntity>
  withdrawalAmounts: Array<CurrencyStatisticEntity>
}

export type ReferralsOverviewInput = {
  from: Scalars['DateTime']['input']
  to: Scalars['DateTime']['input']
  userId: Scalars['Int']['input']
}

export type RefreshEntity = {
  __typename?: 'RefreshEntity'
  accessToken: Scalars['String']['output']
}

export type RejectInput = {
  id: Scalars['String']['input']
}

export type SearchInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  nickname?: InputMaybe<Scalars['String']['input']>
}

export type SignInDto = {
  __typename?: 'SignInDto'
  isBlocked: Scalars['Boolean']['output']
}

export type SignInInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type SignUpInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  referralCode?: InputMaybe<Scalars['String']['input']>
  username: Scalars['String']['input']
}

export type SortAdminLogs = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

/** Оператор сортировки. */
export enum SortEnum {
  /** Данные сортируются по возрастанию. */
  Asc = 'ASC',
  /** Данные сортируются по убыванию. */
  Desc = 'DESC',
}

export type SortPromocode = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

export type SortTransactionLoyaltyProgram = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

export type TransactionLoyaltyProgramAdminInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<SortTransactionLoyaltyProgram>
  type?: InputMaybe<Array<LoyaltyType>>
  userId?: InputMaybe<Scalars['Int']['input']>
}

export type TransactionLoyaltyProgramEntity = {
  __typename?: 'TransactionLoyaltyProgramEntity'
  amount: Scalars['Decimal']['output']
  createdAt: Scalars['DateTime']['output']
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  id: Scalars['String']['output']
  percentage?: Maybe<Scalars['Int']['output']>
  type: LoyaltyType
  user: UserEntity
  userId: Scalars['Int']['output']
}

export type TransactionLoyaltyProgramInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<SortTransactionLoyaltyProgram>
  type?: InputMaybe<Array<LoyaltyType>>
}

export type TransactionPaymentEntity = {
  __typename?: 'TransactionPaymentEntity'
  amount?: Maybe<Scalars['Decimal']['output']>
  amountRub?: Maybe<Scalars['Decimal']['output']>
  amountUsd?: Maybe<Scalars['Decimal']['output']>
  createdAt: Scalars['DateTime']['output']
  currency: CurrencyEntity
  currencyId: Scalars['Int']['output']
  currencyWallet: CurrencyWalletEntity
  currencyWalletId: Scalars['Int']['output']
  destTag?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  method?: Maybe<PaymentWithdrawalMethodsEntity>
  methodId?: Maybe<Scalars['Int']['output']>
  methodType: MethodType
  processedAt?: Maybe<Scalars['DateTime']['output']>
  processedByAdmin?: Maybe<UserEntity>
  processedByAdminId?: Maybe<Scalars['Int']['output']>
  recipient?: Maybe<Scalars['String']['output']>
  status: TransactionStatus
  trackerId?: Maybe<Scalars['String']['output']>
  type: TransactionType
  user: UserEntity
  userId: Scalars['Int']['output']
}

export type TransactionPaymentPaginatedResponse = {
  __typename?: 'TransactionPaymentPaginatedResponse'
  data: Array<TransactionPaymentEntity>
  metadata: PaginationMetadataWithNextEntity
}

export enum TransactionStatus {
  Aborted = 'ABORTED',
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING',
}

export enum TransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL',
}

export type UpdateAnonymityInput = {
  local?: InputMaybe<Scalars['Boolean']['input']>
  server?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateBalanceDto = {
  amount: Scalars['Decimal']['input']
  currencyId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type UpdatePermissionsInput = {
  mask: Scalars['String']['input']
  userId: Scalars['Int']['input']
}

export type UpdatePromocodeDto = {
  activated?: InputMaybe<Scalars['Int']['input']>
  amount?: InputMaybe<Scalars['Float']['input']>
  currencyId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  promocodeName?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserDataDto = {
  email?: InputMaybe<Scalars['String']['input']>
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>
  userId: Scalars['Int']['input']
  username?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  password?: InputMaybe<Scalars['String']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UserEntity = {
  __typename?: 'UserEntity'
  adminRights?: Maybe<AdminRightsEntity>
  anonymity?: Maybe<AnonymityEntity>
  authProvider: AuthProviderType
  avatarLink?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email?: Maybe<Scalars['String']['output']>
  endBlocking?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  isEmailConfirmed: Scalars['Boolean']['output']
  muteTimeDuration?: Maybe<Scalars['Int']['output']>
  referralCode: Scalars['String']['output']
  socialId?: Maybe<Scalars['String']['output']>
  totalBalance: Scalars['Decimal']['output']
  username?: Maybe<Scalars['String']['output']>
}

export type UserInAdminEntity = {
  __typename?: 'UserInAdminEntity'
  adminRights?: Maybe<AdminRightsEntity>
  anonymity?: Maybe<AnonymityEntity>
  authProvider: AuthProviderType
  avatarLink?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email?: Maybe<Scalars['String']['output']>
  endBlocking?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  isBlocked: Scalars['Boolean']['output']
  isEmailConfirmed: Scalars['Boolean']['output']
  muteTimeDuration?: Maybe<Scalars['Int']['output']>
  referralCode: Scalars['String']['output']
  referrals: Scalars['Int']['output']
  socialId?: Maybe<Scalars['String']['output']>
  totalBalance: Scalars['Decimal']['output']
  username?: Maybe<Scalars['String']['output']>
}

export type UserLevelEntity = {
  __typename?: 'UserLevelEntity'
  bonusUsed: Scalars['Boolean']['output']
  currentLevelId: Scalars['Int']['output']
  experiencePoints: Scalars['Decimal']['output']
  id: Scalars['ID']['output']
  level?: Maybe<LevelEntity>
  nextLevelName?: Maybe<Scalars['String']['output']>
  userId: Scalars['Int']['output']
}

export type UserOverviewEntity = {
  __typename?: 'UserOverviewEntity'
  betAmounts: Array<CurrencyStatisticEntity>
  bonusAmounts: Array<CurrencyStatisticEntity>
  depositAmounts: Array<CurrencyStatisticEntity>
  ggrAmounts: Array<CurrencyStatisticEntity>
  referralCount: Scalars['Int']['output']
  totalDeposits: Scalars['Int']['output']
  winAmounts: Array<CurrencyStatisticEntity>
  withdrawalAmounts: Array<CurrencyStatisticEntity>
}

export type UserOverviewInput = {
  from: Scalars['DateTime']['input']
  to: Scalars['DateTime']['input']
  userId: Scalars['Int']['input']
}

export type UserPaginationResponseWithNext = {
  __typename?: 'UserPaginationResponseWithNext'
  data: Array<UserInAdminEntity>
  metadata: PaginationMetadataWithNextEntity
}

export type UserPersonalInfoEntity = {
  __typename?: 'UserPersonalInfoEntity'
  adminRights?: Maybe<AdminRightsEntity>
  anonymity?: Maybe<AnonymityEntity>
  authProvider: AuthProviderType
  avatarLink?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email?: Maybe<Scalars['String']['output']>
  endBlocking?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  invitedUsername?: Maybe<Scalars['String']['output']>
  isBlocked: Scalars['Boolean']['output']
  isEmailConfirmed: Scalars['Boolean']['output']
  muteTimeDuration?: Maybe<Scalars['Int']['output']>
  referralCode: Scalars['String']['output']
  referrals: Scalars['Int']['output']
  socialId?: Maybe<Scalars['String']['output']>
  totalBalance: Scalars['Decimal']['output']
  username?: Maybe<Scalars['String']['output']>
}

export type UserPromocodeUsedEntity = {
  __typename?: 'UserPromocodeUsedEntity'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  promocode: PromocodeWithoutUserCreatedEntity
}

export type UserReferralsInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input']
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input']
  searchTerm?: InputMaybe<Scalars['String']['input']>
  sortMethod?: SortEnum
  userId: Scalars['Int']['input']
}

export type UserSortingInput = {
  sortMethod?: SortEnum
  value?: Scalars['String']['input']
}

export type VerifyCodeInput = {
  code: Scalars['String']['input']
  email: Scalars['String']['input']
}

export type WithdrawalCredentialsInput = {
  cardNumber?: InputMaybe<Scalars['String']['input']>
  cryptoAddress?: InputMaybe<Scalars['String']['input']>
  destTag?: InputMaybe<Scalars['String']['input']>
  freeKassaWallet?: InputMaybe<Scalars['String']['input']>
  methodType: MethodType
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  piastrixWallet?: InputMaybe<Scalars['String']['input']>
  yoomoneyWallet?: InputMaybe<Scalars['String']['input']>
}

export type WithdrawalInput = {
  amount: Scalars['Decimal']['input']
  credentials: WithdrawalCredentialsInput
  currencyId: Scalars['Int']['input']
}

export type WithdrawalOutputEntity = {
  __typename?: 'WithdrawalOutputEntity'
  isAccepted: Scalars['Boolean']['output']
}

export type SignInAdminMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type SignInAdminMutation = {
  __typename?: 'Mutation'
  signInAdmin: { __typename?: 'SignInDto'; isBlocked: boolean }
}

export type LogOutMutationVariables = Exact<{ [key: string]: never }>

export type LogOutMutation = { __typename?: 'Mutation'; logout: boolean }

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never }>

export type RefreshTokensMutation = {
  __typename?: 'Mutation'
  refreshTokens: { __typename?: 'RefreshEntity'; accessToken: string }
}

export type CurrenciesQueryVariables = Exact<{ [key: string]: never }>

export type CurrenciesQuery = {
  __typename?: 'Query'
  currencies: Array<{
    __typename?: 'CurrencyEntity'
    id: number
    code: CurrencyCode
    type: CurrencyType
  }>
}

export type PromocodeFindAllQueryVariables = Exact<{
  paginationInput?: InputMaybe<PaginationInput>
  sort?: InputMaybe<SortPromocode>
  filter?: InputMaybe<PromocodeFilter>
  search?: InputMaybe<Scalars['String']['input']>
}>

export type PromocodeFindAllQuery = {
  __typename?: 'Query'
  promocodeFindAll: {
    __typename?: 'PromocodePaginatedResponse'
    data: Array<{
      __typename?: 'PromocodeEntity'
      id: number
      promocodeName: string
      activated: number
      amount: any
      createdAt: any
      updatedAt?: any | null
      active: boolean
      activatedCount: number
      Currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
      }
      userPromocodeCreate: {
        __typename?: 'UserEntity'
        id: number
        username?: string | null
      }
    }>
    metadata: {
      __typename?: 'PaginationMetadataWithNextEntity'
      prev: boolean
      next: boolean
    }
  }
}

export type PromocodeFindOneQueryVariables = Exact<{
  id: Scalars['Float']['input']
}>

export type PromocodeFindOneQuery = {
  __typename?: 'Query'
  promocodeFindOne: {
    __typename?: 'PromocodeEntity'
    id: number
    promocodeName: string
    activated: number
    amount: any
    createdAt: any
    updatedAt?: any | null
    active: boolean
    activatedCount: number
    Currency: { __typename?: 'CurrencyEntity'; id: number; code: CurrencyCode }
  }
}

export type PromocodeCreateMutationVariables = Exact<{
  createPromocodeInput: CreatePromocodeDto
}>

export type PromocodeCreateMutation = {
  __typename?: 'Mutation'
  promocodeCreate: {
    __typename?: 'PromocodeEntity'
    id: number
    promocodeName: string
    activated: number
    amount: any
    createdAt: any
    updatedAt?: any | null
    active: boolean
    activatedCount: number
  }
}

export type PromocodeUpdateMutationVariables = Exact<{
  updatePromocodeInput: UpdatePromocodeDto
}>

export type PromocodeUpdateMutation = {
  __typename?: 'Mutation'
  promocodeUpdate: {
    __typename?: 'PromocodeEntity'
    id: number
    promocodeName: string
    activated: number
    amount: any
    createdAt: any
    updatedAt?: any | null
    active: boolean
    activatedCount: number
  }
}

export type PromocodeDeleteMutationVariables = Exact<{
  id: Scalars['Float']['input']
}>

export type PromocodeDeleteMutation = {
  __typename?: 'Mutation'
  promocodeDelete: {
    __typename?: 'PromocodeEntity'
    id: number
    promocodeName: string
    activated: number
    amount: any
    createdAt: any
    updatedAt?: any | null
    active: boolean
    activatedCount: number
  }
}

export type UserReferralsQueryVariables = Exact<{
  input: UserReferralsInput
}>

export type UserReferralsQuery = {
  __typename?: 'Query'
  userReferrals: {
    __typename?: 'PaginatedUserReferralsResponse'
    data: Array<{
      __typename?: 'ReferralUserEntity'
      id: number
      email?: string | null
      username?: string | null
      referralCode: string
      totalBalance: any
      socialId?: string | null
      avatarLink?: string | null
      createdAt: any
      authProvider: AuthProviderType
      isEmailConfirmed: boolean
      muteTimeDuration?: number | null
      endBlocking?: any | null
      incomes: Array<{
        __typename?: 'CurrencyStatisticEntity'
        currency: {
          __typename?: 'CurrencyEntity'
          id: number
          code: CurrencyCode
          type: CurrencyType
        }
        balance?: {
          __typename?: 'CurrencyAmountEntity'
          amount: any
          amountUsd: any
          amountRub: any
        } | null
      }>
    }>
    metadata: {
      __typename?: 'PaginationMetadataWithNextEntity'
      prev: boolean
      next: boolean
    }
  }
}

export type UntieReferralMutationVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type UntieReferralMutation = {
  __typename?: 'Mutation'
  untieReferral: {
    __typename?: 'UserEntity'
    id: number
    referralCode: string
    totalBalance: any
    createdAt: any
    authProvider: AuthProviderType
    anonymity?: {
      __typename?: 'AnonymityEntity'
      id: number
      userId: number
      local: boolean
      server: boolean
      createdAt: any
      updatedAt: any
    } | null
  }
}

export type RecalculateUserReferralIncomesMutationVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type RecalculateUserReferralIncomesMutation = {
  __typename?: 'Mutation'
  recalculateUserReferralIncomes: boolean
}

export type AdminRejectTransactionMutationVariables = Exact<{
  rejectInput: RejectInput
}>

export type AdminRejectTransactionMutation = {
  __typename?: 'Mutation'
  adminRejectTransaction: {
    __typename?: 'TransactionPaymentEntity'
    id: string
  }
}

export type AdminApproveTransactionManuallyMutationVariables = Exact<{
  approveManuallyInput: ApproveManuallyInput
}>

export type AdminApproveTransactionManuallyMutation = {
  __typename?: 'Mutation'
  adminApproveTransactionManually: {
    __typename?: 'TransactionPaymentEntity'
    id: string
  }
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me: {
    __typename?: 'UserEntity'
    id: number
    email?: string | null
    username?: string | null
    referralCode: string
    totalBalance: any
    socialId?: string | null
    avatarLink?: string | null
    createdAt: any
    authProvider: AuthProviderType
    isEmailConfirmed: boolean
    anonymity?: {
      __typename?: 'AnonymityEntity'
      id: number
      userId: number
      local: boolean
      server: boolean
      createdAt: any
      updatedAt: any
    } | null
    adminRights?: {
      __typename?: 'AdminRightsEntity'
      userId: number
      accessMask: string
      createdAt: any
      updatedAt: any
    } | null
  }
}

export type AdminFindAllQueryVariables = Exact<{
  paginationInput: PaginationInput
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<UserSortingInput>
}>

export type AdminFindAllQuery = {
  __typename?: 'Query'
  adminFindAll: {
    __typename?: 'UserPaginationResponseWithNext'
    data: Array<{
      __typename?: 'UserInAdminEntity'
      id: number
      email?: string | null
      username?: string | null
      referralCode: string
      totalBalance: any
      socialId?: string | null
      avatarLink?: string | null
      createdAt: any
      isBlocked: boolean
      authProvider: AuthProviderType
      isEmailConfirmed: boolean
      referrals: number
    }>
    metadata: {
      __typename?: 'PaginationMetadataWithNextEntity'
      prev: boolean
      next: boolean
    }
  }
}

export type GetPersonalInfoQueryVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type GetPersonalInfoQuery = {
  __typename?: 'Query'
  getPersonalInfo?: {
    __typename?: 'UserPersonalInfoEntity'
    id: number
    email?: string | null
    username?: string | null
    referralCode: string
    totalBalance: any
    socialId?: string | null
    avatarLink?: string | null
    createdAt: any
    isBlocked: boolean
    authProvider: AuthProviderType
    isEmailConfirmed: boolean
    referrals: number
    invitedUsername?: string | null
    muteTimeDuration?: number | null
    endBlocking?: any | null
  } | null
}

export type UserWalletHistoryQueryVariables = Exact<{
  input: HistoryWalletTransactionsInput
}>

export type UserWalletHistoryQuery = {
  __typename?: 'Query'
  userWalletHistory: {
    __typename?: 'TransactionPaymentPaginatedResponse'
    metadata: {
      __typename?: 'PaginationMetadataWithNextEntity'
      prev: boolean
      next: boolean
    }
    data: Array<{
      __typename?: 'TransactionPaymentEntity'
      id: string
      amount?: any | null
      type: TransactionType
      status: TransactionStatus
      recipient?: string | null
      destTag?: string | null
      trackerId?: string | null
      currencyId: number
      userId: number
      methodId?: number | null
      currencyWalletId: number
      createdAt: any
      processedAt?: any | null
      methodType: MethodType
      method?: {
        __typename?: 'PaymentWithdrawalMethodsEntity'
        id: number
        title: string
        currencyType: CurrencyType
        system: PaymentSystem
        methodType: MethodType
        direction: Direction
        isEnabled: boolean
        currencyId: number
        currency: {
          __typename?: 'CurrencyEntity'
          id: number
          code: CurrencyCode
          type: CurrencyType
        }
      } | null
      currencyWallet: {
        __typename?: 'CurrencyWalletEntity'
        id: number
        balance: any
        address?: string | null
        destTag?: string | null
        userId: number
        currencyId: number
        currency: {
          __typename?: 'CurrencyEntity'
          id: number
          code: CurrencyCode
          type: CurrencyType
        }
      }
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      user: {
        __typename?: 'UserEntity'
        username?: string | null
        id: number
        referralCode: string
        totalBalance: any
        createdAt: any
        isEmailConfirmed: boolean
        authProvider: AuthProviderType
        anonymity?: {
          __typename?: 'AnonymityEntity'
          id: number
          userId: number
          local: boolean
          server: boolean
          createdAt: any
          updatedAt: any
        } | null
      }
    }>
  }
}

export type Admin__LoyaltyProgramTransactionsQueryVariables = Exact<{
  input: TransactionLoyaltyProgramAdminInput
}>

export type Admin__LoyaltyProgramTransactionsQuery = {
  __typename?: 'Query'
  admin__loyaltyProgramTransactions: {
    __typename?: 'PaginationTransactionLoyaltyProgram'
    metadata: {
      __typename?: 'PaginationMetadataWithNextEntity'
      prev: boolean
      next: boolean
    }
    data: Array<{
      __typename?: 'TransactionLoyaltyProgramEntity'
      id: string
      type: LoyaltyType
      amount: any
      currencyId: number
      createdAt: any
      percentage?: number | null
      userId: number
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      user: {
        __typename?: 'UserEntity'
        username?: string | null
        id: number
        referralCode: string
        totalBalance: any
        createdAt: any
        authProvider: AuthProviderType
        isEmailConfirmed: boolean
        anonymity?: {
          __typename?: 'AnonymityEntity'
          id: number
          userId: number
          local: boolean
          server: boolean
          createdAt: any
          updatedAt: any
        } | null
      }
    }>
  }
}

export type UserOverviewQueryVariables = Exact<{
  input: UserOverviewInput
}>

export type UserOverviewQuery = {
  __typename?: 'Query'
  userOverview: {
    __typename?: 'UserOverviewEntity'
    totalDeposits: number
    referralCount: number
    betAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
    winAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
    bonusAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
    depositAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
    withdrawalAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
    ggrAmounts: Array<{
      __typename?: 'CurrencyStatisticEntity'
      currency: {
        __typename?: 'CurrencyEntity'
        id: number
        code: CurrencyCode
        type: CurrencyType
      }
      balance?: {
        __typename?: 'CurrencyAmountEntity'
        amount: any
        amountUsd: any
        amountRub: any
      } | null
    }>
  }
}

export type AdminUpdateUserBalanceMutationVariables = Exact<{
  updateBalanceDto: UpdateBalanceDto
}>

export type AdminUpdateUserBalanceMutation = {
  __typename?: 'Mutation'
  adminUpdateUserBalance: {
    __typename?: 'CurrencyWalletEntity'
    id: number
    balance: any
    address?: string | null
    destTag?: string | null
    userId: number
    currencyId: number
  }
}

export type AdminUpdateUserDataMutationVariables = Exact<{
  updateUserDataDto: UpdateUserDataDto
}>

export type AdminUpdateUserDataMutation = {
  __typename?: 'Mutation'
  adminUpdateUserData: {
    __typename?: 'UserEntity'
    id: number
    email?: string | null
    username?: string | null
    referralCode: string
    totalBalance: any
    socialId?: string | null
    avatarLink?: string | null
    createdAt: any
    authProvider: AuthProviderType
    isEmailConfirmed: boolean
  }
}

export type BlockUserMutationVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type BlockUserMutation = { __typename?: 'Mutation'; blockUser: boolean }

export type UnBlockUserMutationVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type UnBlockUserMutation = {
  __typename?: 'Mutation'
  unBlockUser: boolean
}

export type MuteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input']
  muteTimeDuration: Duration
}>

export type MuteUserMutation = { __typename?: 'Mutation'; muteUser: boolean }

export type UnMuteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type UnMuteUserMutation = {
  __typename?: 'Mutation'
  unMuteUser: boolean
}

export type CurrencyWalletsQueryVariables = Exact<{ [key: string]: never }>

export type CurrencyWalletsQuery = {
  __typename?: 'Query'
  currencyWallets: Array<{
    __typename?: 'CurrencyWalletEntity'
    id: number
    balance: any
    userId: number
    currencyId: number
    currency: { __typename?: 'CurrencyEntity'; id: number; code: CurrencyCode }
  }>
}

export type UserWalletsQueryVariables = Exact<{
  userId: Scalars['Int']['input']
}>

export type UserWalletsQuery = {
  __typename?: 'Query'
  userWallets: Array<{
    __typename?: 'CurrencyWalletEntity'
    id: number
    address?: string | null
    destTag?: string | null
    userId: number
    currencyId: number
    balance: any
    currency: { __typename?: 'CurrencyEntity'; id: number; code: CurrencyCode }
  }>
}

export const SignInAdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignInAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signInAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'signInInput' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'isBlocked' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignInAdminMutation, SignInAdminMutationVariables>
export const LogOutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LogOut' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'logout' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>
export const RefreshTokensDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RefreshTokens' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'refreshTokens' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RefreshTokensMutation,
  RefreshTokensMutationVariables
>
export const CurrenciesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Currencies' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currencies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrenciesQuery, CurrenciesQueryVariables>
export const PromocodeFindAllDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PromocodeFindAll' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'paginationInput' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PaginationInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SortPromocode' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PromocodeFilter' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'promocodeFindAll' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'paginationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'paginationInput' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'promocodeName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activated' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'active' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activatedCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userPromocodeCreate' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PromocodeFindAllQuery,
  PromocodeFindAllQueryVariables
>
export const PromocodeFindOneDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PromocodeFindOne' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'promocodeFindOne' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'promocodeName' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activatedCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'Currency' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PromocodeFindOneQuery,
  PromocodeFindOneQueryVariables
>
export const PromocodeCreateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PromocodeCreate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createPromocodeInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreatePromocodeDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'promocodeCreate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createPromocodeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createPromocodeInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'promocodeName' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activatedCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PromocodeCreateMutation,
  PromocodeCreateMutationVariables
>
export const PromocodeUpdateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PromocodeUpdate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updatePromocodeInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdatePromocodeDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'promocodeUpdate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updatePromocodeInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updatePromocodeInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'promocodeName' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activatedCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PromocodeUpdateMutation,
  PromocodeUpdateMutationVariables
>
export const PromocodeDeleteDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'PromocodeDelete' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'promocodeDelete' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'promocodeName' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'activated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'active' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activatedCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PromocodeDeleteMutation,
  PromocodeDeleteMutationVariables
>
export const UserReferralsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserReferrals' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserReferralsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userReferrals' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referralCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalBalance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'socialId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatarLink' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authProvider' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isEmailConfirmed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'muteTimeDuration' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'endBlocking' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'incomes' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currency' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'code' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'balance' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amount' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amountUsd' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amountRub' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserReferralsQuery, UserReferralsQueryVariables>
export const UntieReferralDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UntieReferral' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'untieReferral' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralCode' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalBalance' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authProvider' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anonymity' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'local' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'server' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UntieReferralMutation,
  UntieReferralMutationVariables
>
export const RecalculateUserReferralIncomesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RecalculateUserReferralIncomes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recalculateUserReferralIncomes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RecalculateUserReferralIncomesMutation,
  RecalculateUserReferralIncomesMutationVariables
>
export const AdminRejectTransactionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AdminRejectTransaction' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'rejectInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RejectInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminRejectTransaction' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rejectInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'rejectInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AdminRejectTransactionMutation,
  AdminRejectTransactionMutationVariables
>
export const AdminApproveTransactionManuallyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AdminApproveTransactionManually' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'approveManuallyInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ApproveManuallyInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminApproveTransactionManually' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'approveManuallyInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'approveManuallyInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AdminApproveTransactionManuallyMutation,
  AdminApproveTransactionManuallyMutationVariables
>
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralCode' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalBalance' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'socialId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarLink' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authProvider' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isEmailConfirmed' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anonymity' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'local' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'server' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'adminRights' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accessMask' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const AdminFindAllDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AdminFindAll' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'paginationInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'PaginationInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'search' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserSortingInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminFindAll' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'paginationInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'paginationInput' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'search' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'username' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referralCode' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalBalance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'socialId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatarLink' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isBlocked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authProvider' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isEmailConfirmed' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referrals' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminFindAllQuery, AdminFindAllQueryVariables>
export const GetPersonalInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPersonalInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getPersonalInfo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralCode' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalBalance' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'socialId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarLink' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isBlocked' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authProvider' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isEmailConfirmed' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'referrals' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'invitedUsername' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'muteTimeDuration' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'endBlocking' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPersonalInfoQuery,
  GetPersonalInfoQueryVariables
>
export const UserWalletHistoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserWalletHistory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'HistoryWalletTransactionsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userWalletHistory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'recipient' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'destTag' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'trackerId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currencyId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'methodId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currencyWalletId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'processedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'methodType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'method' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currencyType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'system' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'methodType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'direction' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isEnabled' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currencyId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currency' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'code' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currencyWallet' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'balance' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'address' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'destTag' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currencyId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currency' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'code' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referralCode' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalBalance' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isEmailConfirmed' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authProvider' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anonymity' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'local' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'server' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserWalletHistoryQuery,
  UserWalletHistoryQueryVariables
>
export const Admin__LoyaltyProgramTransactionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Admin__loyaltyProgramTransactions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'TransactionLoyaltyProgramAdminInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'admin__loyaltyProgramTransactions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'metadata' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'prev' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'next' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'data' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'amount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currencyId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'percentage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referralCode' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalBalance' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authProvider' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isEmailConfirmed' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anonymity' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'local' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'server' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  Admin__LoyaltyProgramTransactionsQuery,
  Admin__LoyaltyProgramTransactionsQueryVariables
>
export const UserOverviewDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserOverview' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserOverviewInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userOverview' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalDeposits' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'betAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'winAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bonusAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'depositAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'withdrawalAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'ggrAmounts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'type' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountUsd' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amountRub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserOverviewQuery, UserOverviewQueryVariables>
export const AdminUpdateUserBalanceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AdminUpdateUserBalance' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateBalanceDto' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateBalanceDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminUpdateUserBalance' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'UpdateBalanceDto' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateBalanceDto' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destTag' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currencyId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AdminUpdateUserBalanceMutation,
  AdminUpdateUserBalanceMutationVariables
>
export const AdminUpdateUserDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AdminUpdateUserData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateUserDataDto' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateUserDataDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminUpdateUserData' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'UpdateUserDataDto' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateUserDataDto' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referralCode' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalBalance' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'socialId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatarLink' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authProvider' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isEmailConfirmed' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AdminUpdateUserDataMutation,
  AdminUpdateUserDataMutationVariables
>
export const BlockUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'BlockUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blockUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlockUserMutation, BlockUserMutationVariables>
export const UnBlockUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UnBlockUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unBlockUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnBlockUserMutation, UnBlockUserMutationVariables>
export const MuteUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'MuteUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'muteTimeDuration' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Duration' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'muteUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'muteTimeDuration' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'muteTimeDuration' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MuteUserMutation, MuteUserMutationVariables>
export const UnMuteUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UnMuteUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unMuteUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnMuteUserMutation, UnMuteUserMutationVariables>
export const CurrencyWalletsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CurrencyWallets' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'currencyWallets' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currencyId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currency' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CurrencyWalletsQuery,
  CurrencyWalletsQueryVariables
>
export const UserWalletsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserWallets' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userWallets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destTag' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'currencyId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currency' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserWalletsQuery, UserWalletsQueryVariables>

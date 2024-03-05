import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** Custom scalar type for Decimal */
  Decimal: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AdminLogsEntity = {
  __typename?: 'AdminLogsEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  user: UserEntity;
};

export type AdminLogsFilter = {
  adminIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type AdminLogsPaginatedResponse = {
  __typename?: 'AdminLogsPaginatedResponse';
  data: Array<AdminLogsEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type AdminRightsEntity = {
  __typename?: 'AdminRightsEntity';
  accessMask: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type AdminsPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymityEntity = {
  __typename?: 'AnonymityEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  local: Scalars['Boolean']['output'];
  server: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type ApproveAutomaticallyInput = {
  id: Scalars['String']['input'];
  paymentWithdrawalMethodId: Scalars['Int']['input'];
};

export type ApproveManuallyInput = {
  id: Scalars['String']['input'];
};

export enum AuthProviderType {
  Email = 'Email',
  Google = 'Google',
  Tg = 'TG',
  Vk = 'VK'
}

export type AvailableWithdrawalEntity = {
  __typename?: 'AvailableWithdrawalEntity';
  balance: Scalars['Decimal']['output'];
  currency: CurrencyEntity;
};

export type BaseOverviewInput = {
  from: Scalars['DateTime']['input'];
  to: Scalars['DateTime']['input'];
};

export type BoostEntity = {
  __typename?: 'BoostEntity';
  boost: Scalars['Decimal']['output'];
  currencyCode: CurrencyCode;
};

export type BoostInfoEntity = {
  __typename?: 'BoostInfoEntity';
  monthlyBoost: Array<BoostEntity>;
  monthlyPercentage: Scalars['Float']['output'];
  timeToEndMonthlyJob?: Maybe<Scalars['String']['output']>;
  timeToEndWeeklyJob?: Maybe<Scalars['String']['output']>;
  weeklyBoost: Array<BoostEntity>;
  weeklyPercentage: Scalars['Float']['output'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChartReportEntity = {
  __typename?: 'ChartReportEntity';
  details: Array<CurrencyStatisticEntity>;
  partition: Scalars['Int']['output'];
};

export enum CommissionType {
  Fixed = 'fixed',
  Percentage = 'percentage'
}

export type CreateCryptoAddressInput = {
  currencyCode: CryptoCurrencyCode;
};

export type CreatePromocodeDto = {
  activated: Scalars['Int']['input'];
  active?: Scalars['Boolean']['input'];
  amount: Scalars['Float']['input'];
  currencyId: Scalars['Int']['input'];
  promocodeName: Scalars['String']['input'];
};

export type CreateSessionInput = {
  balanceCurrency: CurrencyCode;
  deviceType: DeviceType;
  game: Scalars['String']['input'];
  selectedCurrency: CurrencyCode;
};

export type CreatedSessionEntity = {
  __typename?: 'CreatedSessionEntity';
  launch_options: LaunchOptionsEntity;
};

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
  Zec = 'ZEC'
}

export type CurrencyAmountEntity = {
  __typename?: 'CurrencyAmountEntity';
  amount: Scalars['Decimal']['output'];
  amountRub: Scalars['Decimal']['output'];
  amountUsd: Scalars['Decimal']['output'];
};

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
  Zec = 'ZEC'
}

export type CurrencyEntity = {
  __typename?: 'CurrencyEntity';
  code: CurrencyCode;
  id: Scalars['Int']['output'];
  type: CurrencyType;
};

export type CurrencyStatisticEntity = {
  __typename?: 'CurrencyStatisticEntity';
  balance?: Maybe<CurrencyAmountEntity>;
  currency: CurrencyEntity;
};

export enum CurrencyType {
  Crypto = 'crypto',
  Fiat = 'fiat'
}

export type CurrencyWalletEntity = {
  __typename?: 'CurrencyWalletEntity';
  address?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Decimal']['output'];
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  destTag?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type DepositInput = {
  amount: Scalars['Decimal']['input'];
  paymentWithdrawalMethodId: Scalars['Int']['input'];
};

export type DepositOutputEntity = {
  __typename?: 'DepositOutputEntity';
  address?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum DeviceType {
  Desktop = 'desktop',
  Mobile = 'mobile'
}

export enum Direction {
  Payment = 'payment',
  Withdrawal = 'withdrawal'
}

export enum Duration {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneHour = 'ONE_HOUR',
  ThirtyMinutes = 'THIRTY_MINUTES'
}

export type FavoriteGameEntity = {
  __typename?: 'FavoriteGameEntity';
  game: GameEntity;
  userId: Scalars['Float']['output'];
};

export type FilterAllTransaction = {
  statuses?: InputMaybe<Array<TransactionStatus>>;
  type?: InputMaybe<TransactionType>;
};

export type FilterGetTransactionUser = {
  type?: InputMaybe<TransactionType>;
};

export type FilterPaymentWithdrawalMethods = {
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  currencyType?: InputMaybe<CurrencyType>;
  direction?: InputMaybe<Direction>;
};

export type GameEntity = {
  __typename?: 'GameEntity';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  identifier2?: Maybe<Scalars['String']['output']>;
  payout: Scalars['Float']['output'];
  producer: ProducerEntity;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  urlImage: GameImageUrls;
};

export type GameHistoriesPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
};

export type GameHistoriesSortingInput = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type GameHistoryEntity = {
  __typename?: 'GameHistoryEntity';
  betAmount: Scalars['Decimal']['output'];
  currency: CurrencyEntity;
  finished: Scalars['Boolean']['output'];
  game: Scalars['String']['output'];
  gameTitle: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWon: Scalars['Boolean']['output'];
  multiplier: Scalars['Decimal']['output'];
  result: Scalars['Decimal']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
  winAmount: Scalars['Decimal']['output'];
};

export type GameHistoryPaginatedResponse = {
  __typename?: 'GameHistoryPaginatedResponse';
  data: Array<GameHistoryEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type GameImageSize = {
  __typename?: 'GameImageSize';
  size: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type GameImageUrls = {
  __typename?: 'GameImageUrls';
  s1: GameImageSize;
  s2: GameImageSize;
  s3: GameImageSize;
  s4: GameImageSize;
};

export type GamesFilterInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type GamesInFilterInput = {
  key: Scalars['String']['input'];
  value: Array<Scalars['String']['input']>;
};

export type GamesPaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type GamesPaginationResponse = {
  __typename?: 'GamesPaginationResponse';
  countGames: Scalars['String']['output'];
  data: Array<GameEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type GamesSortingInput = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type GlobalOverviewEntity = {
  __typename?: 'GlobalOverviewEntity';
  betAmounts: Array<CurrencyStatisticEntity>;
  bonusAmounts: Array<CurrencyStatisticEntity>;
  depositAmounts: Array<CurrencyStatisticEntity>;
  firstDeposits: Scalars['Int']['output'];
  ggrAmounts: Array<CurrencyStatisticEntity>;
  repeatedDeposits: Scalars['Int']['output'];
  totalDeposits: Scalars['Int']['output'];
  winAmounts: Array<CurrencyStatisticEntity>;
  withdrawalAmounts: Array<CurrencyStatisticEntity>;
};

export type HistoryWalletTransactionsInput = {
  filter?: InputMaybe<FilterAllTransaction>;
  paginationInput?: InputMaybe<PaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type LastCredentialsEntity = {
  __typename?: 'LastCredentialsEntity';
  currencyWalletId: Scalars['Float']['output'];
  destTag?: Maybe<Scalars['String']['output']>;
  methodType: Scalars['String']['output'];
  recipient: Scalars['String']['output'];
};

export type LaunchOptionsEntity = {
  __typename?: 'LaunchOptionsEntity';
  game_url: Scalars['String']['output'];
  strategy: Scalars['String']['output'];
};

export type LevelEntity = {
  __typename?: 'LevelEntity';
  id: Scalars['Int']['output'];
  levelBonus: Scalars['Int']['output'];
  levelName: Scalars['String']['output'];
  maxExperiencePoints: Scalars['Int']['output'];
  minExperiencePoints: Scalars['Int']['output'];
  nextLevelId?: Maybe<Scalars['Int']['output']>;
};

export enum LoyaltyType {
  LevelBonus = 'LevelBonus',
  Promocode = 'Promocode',
  Rakeback = 'Rakeback',
  ReloadMonthly = 'ReloadMonthly',
  WeeklyBoost = 'WeeklyBoost'
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
  Zec = 'ZEC'
}

export type Mutation = {
  __typename?: 'Mutation';
  abortActiveWithdrawal: TransactionPaymentEntity;
  addFavoriteGame: FavoriteGameEntity;
  addOrChangeEmail: Scalars['Boolean']['output'];
  adminApproveTransactionAutomatically: TransactionPaymentEntity;
  adminApproveTransactionManually: TransactionPaymentEntity;
  adminRejectTransaction: TransactionPaymentEntity;
  adminUpdateUserBalance: CurrencyWalletEntity;
  adminUpdateUserData: UserEntity;
  approveAutomaticallyMultiple: Scalars['Boolean']['output'];
  bannedUser: Scalars['Boolean']['output'];
  blockUser: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changeUsername: Scalars['Boolean']['output'];
  createCryptoAddress: CurrencyWalletEntity;
  deleteAvatar: Scalars['Boolean']['output'];
  deleteChatMessage: Scalars['Boolean']['output'];
  deposit: DepositOutputEntity;
  loadGames: Scalars['Float']['output'];
  logout: Scalars['Boolean']['output'];
  muteUser: Scalars['Boolean']['output'];
  promocodeCreate: PromocodeEntity;
  promocodeDelete: PromocodeEntity;
  promocodeUpdate: PromocodeEntity;
  recalculateUserReferralIncomes: Scalars['Boolean']['output'];
  recoveryPassword: Scalars['Boolean']['output'];
  refreshTokens: RefreshEntity;
  removeFavoriteGame: FavoriteGameEntity;
  removeUser: UserEntity;
  resendVerifyCode: Scalars['Boolean']['output'];
  revokeAdminPermissions: Scalars['Boolean']['output'];
  sendMailForRecoveryPassword: Scalars['Boolean']['output'];
  signIn: SignInDto;
  signInAdmin: SignInDto;
  signUp: Scalars['Boolean']['output'];
  unBlockUser: Scalars['Boolean']['output'];
  unMuteUser: Scalars['Boolean']['output'];
  untieReferral: UserEntity;
  updateAnonymity: AnonymityEntity;
  updateAvatar: Scalars['Boolean']['output'];
  updateGameImages: Scalars['Boolean']['output'];
  updateProviderGameImages: Scalars['Boolean']['output'];
  updateUser: UserEntity;
  updateUserPermissions: Scalars['Boolean']['output'];
  usePromocode: Scalars['Boolean']['output'];
  verifyCode: Scalars['Boolean']['output'];
  withdrawBonus: Scalars['Boolean']['output'];
  withdrawRakeBake: Array<RakebackWithdrawalEntity>;
  withdrawReferralBalance: Scalars['Boolean']['output'];
  withdrawal: WithdrawalOutputEntity;
};


export type MutationAddFavoriteGameArgs = {
  gameId: Scalars['String']['input'];
};


export type MutationAddOrChangeEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationAdminApproveTransactionAutomaticallyArgs = {
  approveAutomaticallyInput: ApproveAutomaticallyInput;
};


export type MutationAdminApproveTransactionManuallyArgs = {
  approveManuallyInput: ApproveManuallyInput;
};


export type MutationAdminRejectTransactionArgs = {
  rejectInput: RejectInput;
};


export type MutationAdminUpdateUserBalanceArgs = {
  UpdateBalanceDto: UpdateBalanceDto;
};


export type MutationAdminUpdateUserDataArgs = {
  UpdateUserDataDto: UpdateUserDataDto;
};


export type MutationApproveAutomaticallyMultipleArgs = {
  approvalDetails: Array<ApproveAutomaticallyInput>;
};


export type MutationBannedUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationBlockUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
};


export type MutationChangeUsernameArgs = {
  userName: Scalars['String']['input'];
};


export type MutationCreateCryptoAddressArgs = {
  createCryptoAddressInput: CreateCryptoAddressInput;
};


export type MutationDeleteChatMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDepositArgs = {
  depositInput: DepositInput;
};


export type MutationMuteUserArgs = {
  muteTimeDuration: Duration;
  userId: Scalars['Int']['input'];
};


export type MutationPromocodeCreateArgs = {
  createPromocodeInput: CreatePromocodeDto;
};


export type MutationPromocodeDeleteArgs = {
  id: Scalars['Float']['input'];
};


export type MutationPromocodeUpdateArgs = {
  updatePromocodeInput: UpdatePromocodeDto;
};


export type MutationRecalculateUserReferralIncomesArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationRecoveryPasswordArgs = {
  data: RecoveryPasswordDataInput;
};


export type MutationRemoveFavoriteGameArgs = {
  gameId: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRevokeAdminPermissionsArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationSendMailForRecoveryPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignInAdminArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUnBlockUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationUnMuteUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationUntieReferralArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationUpdateAnonymityArgs = {
  updateAnonymityInput: UpdateAnonymityInput;
};


export type MutationUpdateAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationUpdateProviderGameImagesArgs = {
  slug: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserPermissionsArgs = {
  updateInput: UpdatePermissionsInput;
};


export type MutationUsePromocodeArgs = {
  promocodeName: Scalars['String']['input'];
};


export type MutationVerifyCodeArgs = {
  verifyCodeInput: VerifyCodeInput;
};


export type MutationWithdrawBonusArgs = {
  currencyCode: CurrencyCode;
};


export type MutationWithdrawalArgs = {
  withdrawalInput: WithdrawalInput;
};

export type PaginatedUserReferralsResponse = {
  __typename?: 'PaginatedUserReferralsResponse';
  data: Array<ReferralUserEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type PaginatedUsersEntity = {
  __typename?: 'PaginatedUsersEntity';
  data: Array<UserEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type PaginationArgsDto = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  filter?: InputMaybe<AdminLogsFilter>;
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortAdminLogs>;
};

/** Пагинация */
export type PaginationInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
};

export type PaginationMetadataWithNextEntity = {
  __typename?: 'PaginationMetadataWithNextEntity';
  next: Scalars['Boolean']['output'];
  prev: Scalars['Boolean']['output'];
};

export type PaginationReferralTransactionResponse = {
  __typename?: 'PaginationReferralTransactionResponse';
  data: Array<ReferralTransactionEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type PaginationTransactionLoyaltyProgram = {
  __typename?: 'PaginationTransactionLoyaltyProgram';
  data: Array<TransactionLoyaltyProgramEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export enum PaymentSystem {
  Aifory = 'Aifory',
  Exnode = 'Exnode',
  FreeKassa = 'FreeKassa',
  Piastrix = 'Piastrix',
  Rubpay = 'Rubpay',
  Skypay = 'Skypay'
}

export type PaymentWithdrawalMethodsEntity = {
  __typename?: 'PaymentWithdrawalMethodsEntity';
  commissionIn?: Maybe<Scalars['Decimal']['output']>;
  commissionOut?: Maybe<Scalars['Decimal']['output']>;
  commissionType?: Maybe<CommissionType>;
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  currencyType: CurrencyType;
  direction: Direction;
  id: Scalars['Int']['output'];
  isEnabled: Scalars['Boolean']['output'];
  maxDeposit?: Maybe<Scalars['Decimal']['output']>;
  maxWithdraw?: Maybe<Scalars['Decimal']['output']>;
  methodType: MethodType;
  minDeposit?: Maybe<Scalars['Decimal']['output']>;
  minWithdraw?: Maybe<Scalars['Decimal']['output']>;
  networkCommissionIn?: Maybe<Scalars['Decimal']['output']>;
  networkCommissionOut?: Maybe<Scalars['Decimal']['output']>;
  system: PaymentSystem;
  title: Scalars['String']['output'];
};

export type ProducerEntity = {
  __typename?: 'ProducerEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  provider: ProviderEntity;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProducerWithCountEntity = {
  __typename?: 'ProducerWithCountEntity';
  createdAt: Scalars['DateTime']['output'];
  gameCount: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  providerId: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromocodeEntity = {
  __typename?: 'PromocodeEntity';
  Currency: CurrencyEntity;
  activated: Scalars['Int']['output'];
  activatedCount: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  promocodeName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userPromocodeCreate: UserEntity;
};

export type PromocodeFilter = {
  currencyId?: InputMaybe<Scalars['Float']['input']>;
};

export type PromocodePaginatedResponse = {
  __typename?: 'PromocodePaginatedResponse';
  data: Array<PromocodeEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type PromocodeWithoutUserCreatedEntity = {
  __typename?: 'PromocodeWithoutUserCreatedEntity';
  Currency: CurrencyEntity;
  activated: Scalars['Int']['output'];
  activatedCount: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  promocodeName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProviderEntity = {
  __typename?: 'ProviderEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  adminFindAll: UserPaginationResponseWithNext;
  adminGetWithdrawalMethodsForTransaction: Array<PaymentWithdrawalMethodsEntity>;
  adminLogs: AdminLogsPaginatedResponse;
  adminSearch?: Maybe<UserEntity>;
  admin__loyaltyProgramTransactions: PaginationTransactionLoyaltyProgram;
  admins: PaginatedUsersEntity;
  createGameDemo: CreatedSessionEntity;
  createSession: CreatedSessionEntity;
  currencies: Array<CurrencyEntity>;
  currency: CurrencyEntity;
  currencyWallet: CurrencyWalletEntity;
  currencyWallets: Array<CurrencyWalletEntity>;
  favoriteUserGames: Array<GameEntity>;
  findOne: UserEntity;
  game: GameEntity;
  games: GamesPaginationResponse;
  getActiveWithdrawal?: Maybe<TransactionPaymentEntity>;
  getHistoryPromocode: Array<UserPromocodeUsedEntity>;
  getInfoBoost: BoostInfoEntity;
  getLastWithdrawalCredentials?: Maybe<LastCredentialsEntity>;
  getPersonalInfo?: Maybe<UserPersonalInfoEntity>;
  getReferralProgramStatistics: ReferralProgramStatisticEntity;
  getTransactionUser: Array<TransactionPaymentEntity>;
  getUserLevel: UserLevelEntity;
  globalBetAmountReport: Array<ChartReportEntity>;
  globalBonusAmountReport: Array<ChartReportEntity>;
  globalDepositAmountReport: Array<ChartReportEntity>;
  globalGgrAmountReport: Array<ChartReportEntity>;
  globalOverview: GlobalOverviewEntity;
  globalWinAmountReport: Array<ChartReportEntity>;
  globalWithdrawalAmountReport: Array<ChartReportEntity>;
  headersGames: GamesPaginationResponse;
  loyaltyProgramTransactions: PaginationTransactionLoyaltyProgram;
  me: UserEntity;
  myAnonymity: AnonymityEntity;
  myGameHistories: GameHistoryPaginatedResponse;
  myRakeBacks: RakebacksEntity;
  myReferralBalance: Array<ReferralBalanceEntity>;
  paymentWithdrawalMethods: Array<PaymentWithdrawalMethodsEntity>;
  popularGames: Array<GameEntity>;
  producers: Array<ProducerWithCountEntity>;
  promocodeFindAll: PromocodePaginatedResponse;
  promocodeFindOne: PromocodeEntity;
  recommendedGame: GamesPaginationResponse;
  referralCashoutHistory: PaginationReferralTransactionResponse;
  referralsBetAmountReport: Array<ChartReportEntity>;
  referralsBonusAmountReport: Array<ChartReportEntity>;
  referralsDepositAmountReport: Array<ChartReportEntity>;
  referralsGgrAmountReport: Array<ChartReportEntity>;
  referralsOverview: ReferralsOverviewEntity;
  referralsProfitReport: Array<ChartReportEntity>;
  referralsWinAmountReport: Array<ChartReportEntity>;
  referralsWithdrawalAmountReport: Array<ChartReportEntity>;
  userBetAmountReport: Array<ChartReportEntity>;
  userBonusAmountReport: Array<ChartReportEntity>;
  userDepositAmountReport: Array<ChartReportEntity>;
  userGgrAmountReport: Array<ChartReportEntity>;
  userOverview: UserOverviewEntity;
  userReferrals: PaginatedUserReferralsResponse;
  userWalletHistory: TransactionPaymentPaginatedResponse;
  userWallets: Array<CurrencyWalletEntity>;
  userWinAmountReport: Array<ChartReportEntity>;
  userWithdrawalAmountReport: Array<ChartReportEntity>;
};


export type QueryAdminFindAllArgs = {
  paginationInput: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<UserSortingInput>;
};


export type QueryAdminGetWithdrawalMethodsForTransactionArgs = {
  transactionId: Scalars['String']['input'];
};


export type QueryAdminLogsArgs = {
  PaginationArgsDto: PaginationArgsDto;
};


export type QueryAdminSearchArgs = {
  searchInput: SearchInput;
};


export type QueryAdmin__LoyaltyProgramTransactionsArgs = {
  input: TransactionLoyaltyProgramAdminInput;
};


export type QueryAdminsArgs = {
  paginationArgs: AdminsPaginationInput;
};


export type QueryCreateGameDemoArgs = {
  clientType: Scalars['String']['input'];
  game: Scalars['String']['input'];
};


export type QueryCreateSessionArgs = {
  input: CreateSessionInput;
};


export type QueryFindOneArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGameArgs = {
  identifier: Scalars['String']['input'];
};


export type QueryGamesArgs = {
  filter?: InputMaybe<GamesFilterInput>;
  filterIn?: InputMaybe<GamesInFilterInput>;
  paginationInput?: InputMaybe<GamesPaginationInput>;
  sort?: InputMaybe<GamesSortingInput>;
};


export type QueryGetPersonalInfoArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetReferralProgramStatisticsArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetTransactionUserArgs = {
  filter?: InputMaybe<FilterGetTransactionUser>;
  sort?: InputMaybe<SortTransactionPayment>;
};


export type QueryGlobalBetAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalBonusAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalDepositAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalGgrAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalOverviewArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalWinAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryGlobalWithdrawalAmountReportArgs = {
  input: BaseOverviewInput;
};


export type QueryHeadersGamesArgs = {
  paginationInput?: InputMaybe<GamesPaginationInput>;
  sort?: InputMaybe<GamesSortingInput>;
};


export type QueryLoyaltyProgramTransactionsArgs = {
  input: TransactionLoyaltyProgramInput;
};


export type QueryMyGameHistoriesArgs = {
  pagination: GameHistoriesPaginationInput;
  sort?: InputMaybe<GameHistoriesSortingInput>;
};


export type QueryPaymentWithdrawalMethodsArgs = {
  filter?: InputMaybe<FilterPaymentWithdrawalMethods>;
};


export type QueryPromocodeFindAllArgs = {
  filter?: InputMaybe<PromocodeFilter>;
  paginationInput?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortPromocode>;
};


export type QueryPromocodeFindOneArgs = {
  id: Scalars['Float']['input'];
};


export type QueryRecommendedGameArgs = {
  identifier: Scalars['String']['input'];
};


export type QueryReferralCashoutHistoryArgs = {
  paginationInput: PaginationInput;
};


export type QueryReferralsBetAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsBonusAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsDepositAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsGgrAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsOverviewArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsProfitReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsWinAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryReferralsWithdrawalAmountReportArgs = {
  input: ReferralsOverviewInput;
};


export type QueryUserBetAmountReportArgs = {
  input: UserOverviewInput;
};


export type QueryUserBonusAmountReportArgs = {
  input: UserOverviewInput;
};


export type QueryUserDepositAmountReportArgs = {
  input: UserOverviewInput;
};


export type QueryUserGgrAmountReportArgs = {
  input: UserOverviewInput;
};


export type QueryUserOverviewArgs = {
  input: UserOverviewInput;
};


export type QueryUserReferralsArgs = {
  input: UserReferralsInput;
};


export type QueryUserWalletHistoryArgs = {
  input: HistoryWalletTransactionsInput;
};


export type QueryUserWalletsArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryUserWinAmountReportArgs = {
  input: UserOverviewInput;
};


export type QueryUserWithdrawalAmountReportArgs = {
  input: UserOverviewInput;
};

export type RakebackEntity = {
  __typename?: 'RakebackEntity';
  balance: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type RakebackWithdrawalEntity = {
  __typename?: 'RakebackWithdrawalEntity';
  rakeback: RakebackEntity;
  wallet: CurrencyWalletEntity;
};

export type RakebacksEntity = {
  __typename?: 'RakebacksEntity';
  myRakebacks: Array<RakebackEntity>;
  rakebackPercentage: Scalars['Int']['output'];
};

export type RecoveryPasswordDataInput = {
  hash: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  repeatPassword: Scalars['String']['input'];
};

export type ReferralBalanceEntity = {
  __typename?: 'ReferralBalanceEntity';
  balance: Scalars['Decimal']['output'];
  claimedAmount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type ReferralProgramStatisticEntity = {
  __typename?: 'ReferralProgramStatisticEntity';
  bets: Scalars['Int']['output'];
  referrals: Scalars['Int']['output'];
  wagered: Array<ReferralProgramWageredEntity>;
};

export type ReferralProgramWageredEntity = {
  __typename?: 'ReferralProgramWageredEntity';
  balance: Scalars['Decimal']['output'];
  currency: CurrencyEntity;
};

export type ReferralTransactionEntity = {
  __typename?: 'ReferralTransactionEntity';
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: CurrencyEntity;
  id: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReferralUserEntity = {
  __typename?: 'ReferralUserEntity';
  adminRights?: Maybe<AdminRightsEntity>;
  anonymity?: Maybe<AnonymityEntity>;
  authProvider: AuthProviderType;
  avatarLink?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endBlocking?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  incomes: Array<CurrencyStatisticEntity>;
  isEmailConfirmed: Scalars['Boolean']['output'];
  muteTimeDuration?: Maybe<Scalars['Int']['output']>;
  referralCode: Scalars['String']['output'];
  socialId?: Maybe<Scalars['String']['output']>;
  totalBalance: Scalars['Decimal']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type ReferralsOverviewEntity = {
  __typename?: 'ReferralsOverviewEntity';
  availableWithdrawals: Array<AvailableWithdrawalEntity>;
  betAmounts: Array<CurrencyStatisticEntity>;
  bonusAmounts: Array<CurrencyStatisticEntity>;
  depositAmounts: Array<CurrencyStatisticEntity>;
  firstDeposits: Scalars['Int']['output'];
  ggrAmounts: Array<CurrencyStatisticEntity>;
  profitAmounts: Array<CurrencyStatisticEntity>;
  referralCount: Scalars['Int']['output'];
  repeatedDeposits: Scalars['Int']['output'];
  totalDeposits: Scalars['Int']['output'];
  winAmounts: Array<CurrencyStatisticEntity>;
  withdrawalAmounts: Array<CurrencyStatisticEntity>;
};

export type ReferralsOverviewInput = {
  from: Scalars['DateTime']['input'];
  to: Scalars['DateTime']['input'];
  userId: Scalars['Int']['input'];
};

export type RefreshEntity = {
  __typename?: 'RefreshEntity';
  accessToken: Scalars['String']['output'];
};

export type RejectInput = {
  id: Scalars['String']['input'];
};

export type SearchInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

export type SignInDto = {
  __typename?: 'SignInDto';
  isBlocked: Scalars['Boolean']['output'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type SortAdminLogs = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

/** Оператор сортировки. */
export enum SortEnum {
  /** Данные сортируются по возрастанию. */
  Asc = 'ASC',
  /** Данные сортируются по убыванию. */
  Desc = 'DESC'
}

export type SortPromocode = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type SortTransactionLoyaltyProgram = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type SortTransactionPayment = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type TransactionLoyaltyProgramAdminInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortTransactionLoyaltyProgram>;
  type?: InputMaybe<Array<LoyaltyType>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionLoyaltyProgramEntity = {
  __typename?: 'TransactionLoyaltyProgramEntity';
  amount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  percentage?: Maybe<Scalars['Int']['output']>;
  type: LoyaltyType;
  user: UserEntity;
  userId: Scalars['Int']['output'];
};

export type TransactionLoyaltyProgramInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<SortTransactionLoyaltyProgram>;
  type?: InputMaybe<Array<LoyaltyType>>;
};

export type TransactionPaymentEntity = {
  __typename?: 'TransactionPaymentEntity';
  amount?: Maybe<Scalars['Decimal']['output']>;
  amountRub?: Maybe<Scalars['Decimal']['output']>;
  amountUsd?: Maybe<Scalars['Decimal']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: CurrencyEntity;
  currencyId: Scalars['Int']['output'];
  currencyWallet: CurrencyWalletEntity;
  currencyWalletId: Scalars['Int']['output'];
  destTag?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  method?: Maybe<PaymentWithdrawalMethodsEntity>;
  methodId?: Maybe<Scalars['Int']['output']>;
  methodType: MethodType;
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  processedByAdmin?: Maybe<UserEntity>;
  processedByAdminId?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  status: TransactionStatus;
  trackerId?: Maybe<Scalars['String']['output']>;
  type: TransactionType;
  user: UserEntity;
  userId: Scalars['Int']['output'];
};

export type TransactionPaymentPaginatedResponse = {
  __typename?: 'TransactionPaymentPaginatedResponse';
  data: Array<TransactionPaymentEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export enum TransactionStatus {
  Aborted = 'ABORTED',
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING'
}

export enum TransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL'
}

export type UpdateAnonymityInput = {
  local?: InputMaybe<Scalars['Boolean']['input']>;
  server?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateBalanceDto = {
  amount: Scalars['Decimal']['input'];
  currencyId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdatePermissionsInput = {
  mask: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdatePromocodeDto = {
  activated?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  currencyId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  promocodeName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDataDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Int']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  adminRights?: Maybe<AdminRightsEntity>;
  anonymity?: Maybe<AnonymityEntity>;
  authProvider: AuthProviderType;
  avatarLink?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endBlocking?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  isEmailConfirmed: Scalars['Boolean']['output'];
  muteTimeDuration?: Maybe<Scalars['Int']['output']>;
  referralCode: Scalars['String']['output'];
  socialId?: Maybe<Scalars['String']['output']>;
  totalBalance: Scalars['Decimal']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInAdminEntity = {
  __typename?: 'UserInAdminEntity';
  adminRights?: Maybe<AdminRightsEntity>;
  anonymity?: Maybe<AnonymityEntity>;
  authProvider: AuthProviderType;
  avatarLink?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endBlocking?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isEmailConfirmed: Scalars['Boolean']['output'];
  muteTimeDuration?: Maybe<Scalars['Int']['output']>;
  referralCode: Scalars['String']['output'];
  referrals: Scalars['Int']['output'];
  socialId?: Maybe<Scalars['String']['output']>;
  totalBalance: Scalars['Decimal']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserLevelEntity = {
  __typename?: 'UserLevelEntity';
  bonusUsed: Scalars['Boolean']['output'];
  currentLevelId: Scalars['Int']['output'];
  experiencePoints: Scalars['Decimal']['output'];
  id: Scalars['ID']['output'];
  level?: Maybe<LevelEntity>;
  nextLevelName?: Maybe<Scalars['String']['output']>;
  userId: Scalars['Int']['output'];
};

export type UserOverviewEntity = {
  __typename?: 'UserOverviewEntity';
  betAmounts: Array<CurrencyStatisticEntity>;
  bonusAmounts: Array<CurrencyStatisticEntity>;
  depositAmounts: Array<CurrencyStatisticEntity>;
  ggrAmounts: Array<CurrencyStatisticEntity>;
  referralCount: Scalars['Int']['output'];
  totalDeposits: Scalars['Int']['output'];
  winAmounts: Array<CurrencyStatisticEntity>;
  withdrawalAmounts: Array<CurrencyStatisticEntity>;
};

export type UserOverviewInput = {
  from: Scalars['DateTime']['input'];
  to: Scalars['DateTime']['input'];
  userId: Scalars['Int']['input'];
};

export type UserPaginationResponseWithNext = {
  __typename?: 'UserPaginationResponseWithNext';
  data: Array<UserInAdminEntity>;
  metadata: PaginationMetadataWithNextEntity;
};

export type UserPersonalInfoEntity = {
  __typename?: 'UserPersonalInfoEntity';
  adminRights?: Maybe<AdminRightsEntity>;
  anonymity?: Maybe<AnonymityEntity>;
  authProvider: AuthProviderType;
  avatarLink?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  endBlocking?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  invitedUsername?: Maybe<Scalars['String']['output']>;
  isBlocked: Scalars['Boolean']['output'];
  isEmailConfirmed: Scalars['Boolean']['output'];
  muteTimeDuration?: Maybe<Scalars['Int']['output']>;
  referralCode: Scalars['String']['output'];
  referrals: Scalars['Int']['output'];
  socialId?: Maybe<Scalars['String']['output']>;
  totalBalance: Scalars['Decimal']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserPromocodeUsedEntity = {
  __typename?: 'UserPromocodeUsedEntity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  promocode: PromocodeWithoutUserCreatedEntity;
};

export type UserReferralsInput = {
  /** Номер страницы */
  currentPage?: Scalars['Int']['input'];
  /** Количество записей на странице */
  perPage?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sortMethod?: SortEnum;
  userId: Scalars['Int']['input'];
};

export type UserSortingInput = {
  sortMethod?: SortEnum;
  value?: Scalars['String']['input'];
};

export type VerifyCodeInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type WithdrawalCredentialsInput = {
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cryptoAddress?: InputMaybe<Scalars['String']['input']>;
  destTag?: InputMaybe<Scalars['String']['input']>;
  freeKassaWallet?: InputMaybe<Scalars['String']['input']>;
  methodType: MethodType;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  piastrixWallet?: InputMaybe<Scalars['String']['input']>;
  yoomoneyWallet?: InputMaybe<Scalars['String']['input']>;
};

export type WithdrawalInput = {
  amount: Scalars['Decimal']['input'];
  credentials: WithdrawalCredentialsInput;
  currencyId: Scalars['Int']['input'];
};

export type WithdrawalOutputEntity = {
  __typename?: 'WithdrawalOutputEntity';
  isAccepted: Scalars['Boolean']['output'];
};

export type AdminsLogsQueryVariables = Exact<{
  paginationArgsDto: PaginationArgsDto;
}>;


export type AdminsLogsQuery = { __typename?: 'Query', adminLogs: { __typename?: 'AdminLogsPaginatedResponse', metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean }, data: Array<{ __typename?: 'AdminLogsEntity', id: string, message: string, createdAt: any, user: { __typename?: 'UserEntity', id: number, username?: string | null } }> } };

export type AdminsForDropDownQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminsForDropDownQuery = { __typename?: 'Query', admins: { __typename?: 'PaginatedUsersEntity', data: Array<{ __typename?: 'UserEntity', id: number, email?: string | null, username?: string | null, createdAt: any }> } };

export type AdminsQueryVariables = Exact<{
  paginationArgs: AdminsPaginationInput;
}>;


export type AdminsQuery = { __typename?: 'Query', admins: { __typename?: 'PaginatedUsersEntity', data: Array<{ __typename?: 'UserEntity', id: number, email?: string | null, username?: string | null, createdAt: any, adminRights?: { __typename?: 'AdminRightsEntity', userId: number, accessMask: string, createdAt: any, updatedAt: any } | null }>, metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean } } };

export type RevokeAdminPermissionsMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type RevokeAdminPermissionsMutation = { __typename?: 'Mutation', revokeAdminPermissions: boolean };

export type SignInAdminMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInAdminMutation = { __typename?: 'Mutation', signInAdmin: { __typename?: 'SignInDto', isBlocked: boolean } };

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { __typename?: 'Mutation', refreshTokens: { __typename?: 'RefreshEntity', accessToken: string } };

export type CurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrenciesQuery = { __typename?: 'Query', currencies: Array<{ __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }> };

export type PromocodeFindAllQueryVariables = Exact<{
  paginationInput?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortPromocode>;
  filter?: InputMaybe<PromocodeFilter>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type PromocodeFindAllQuery = { __typename?: 'Query', promocodeFindAll: { __typename?: 'PromocodePaginatedResponse', data: Array<{ __typename?: 'PromocodeEntity', id: number, promocodeName: string, activated: number, amount: any, createdAt: any, updatedAt?: any | null, active: boolean, activatedCount: number, Currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode }, userPromocodeCreate: { __typename?: 'UserEntity', id: number, username?: string | null } }>, metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean } } };

export type PromocodeFindOneQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type PromocodeFindOneQuery = { __typename?: 'Query', promocodeFindOne: { __typename?: 'PromocodeEntity', id: number, promocodeName: string, activated: number, amount: any, createdAt: any, updatedAt?: any | null, active: boolean, activatedCount: number, Currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode } } };

export type PromocodeCreateMutationVariables = Exact<{
  createPromocodeInput: CreatePromocodeDto;
}>;


export type PromocodeCreateMutation = { __typename?: 'Mutation', promocodeCreate: { __typename?: 'PromocodeEntity', id: number, promocodeName: string, activated: number, amount: any, createdAt: any, updatedAt?: any | null, active: boolean, activatedCount: number } };

export type PromocodeUpdateMutationVariables = Exact<{
  updatePromocodeInput: UpdatePromocodeDto;
}>;


export type PromocodeUpdateMutation = { __typename?: 'Mutation', promocodeUpdate: { __typename?: 'PromocodeEntity', id: number, promocodeName: string, activated: number, amount: any, createdAt: any, updatedAt?: any | null, active: boolean, activatedCount: number } };

export type PromocodeDeleteMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type PromocodeDeleteMutation = { __typename?: 'Mutation', promocodeDelete: { __typename?: 'PromocodeEntity', id: number, promocodeName: string, activated: number, amount: any, createdAt: any, updatedAt?: any | null, active: boolean, activatedCount: number } };

export type FindUserReferralsQueryVariables = Exact<{
  input: UserReferralsInput;
}>;


export type FindUserReferralsQuery = { __typename?: 'Query', userReferrals: { __typename?: 'PaginatedUserReferralsResponse', data: Array<{ __typename?: 'ReferralUserEntity', id: number, email?: string | null, username?: string | null, referralCode: string, totalBalance: any, socialId?: string | null, avatarLink?: string | null, createdAt: any, authProvider: AuthProviderType, isEmailConfirmed: boolean, muteTimeDuration?: number | null, endBlocking?: any | null, incomes: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }> }>, metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean } } };

export type ReferralsOverviewQueryVariables = Exact<{
  input: ReferralsOverviewInput;
}>;


export type ReferralsOverviewQuery = { __typename?: 'Query', referralsOverview: { __typename?: 'ReferralsOverviewEntity', totalDeposits: number, firstDeposits: number, repeatedDeposits: number, referralCount: number, betAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, winAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, ggrAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, profitAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, availableWithdrawals: Array<{ __typename?: 'AvailableWithdrawalEntity', balance: any, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType } }>, bonusAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, depositAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, withdrawalAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }> } };

export type UntieReferralMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type UntieReferralMutation = { __typename?: 'Mutation', untieReferral: { __typename?: 'UserEntity', id: number, referralCode: string, totalBalance: any, createdAt: any, authProvider: AuthProviderType } };

export type RecalculateUserReferralIncomesMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type RecalculateUserReferralIncomesMutation = { __typename?: 'Mutation', recalculateUserReferralIncomes: boolean };

export type AdminRejectTransactionMutationVariables = Exact<{
  rejectInput: RejectInput;
}>;


export type AdminRejectTransactionMutation = { __typename?: 'Mutation', adminRejectTransaction: { __typename?: 'TransactionPaymentEntity', id: string } };

export type AdminApproveTransactionManuallyMutationVariables = Exact<{
  approveManuallyInput: ApproveManuallyInput;
}>;


export type AdminApproveTransactionManuallyMutation = { __typename?: 'Mutation', adminApproveTransactionManually: { __typename?: 'TransactionPaymentEntity', id: string } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me: { __typename?: 'UserEntity', id: number, email?: string | null, username?: string | null, referralCode: string, totalBalance: any, socialId?: string | null, avatarLink?: string | null, createdAt: any, authProvider: AuthProviderType, isEmailConfirmed: boolean, anonymity?: { __typename?: 'AnonymityEntity', id: number, userId: number, local: boolean, server: boolean, createdAt: any, updatedAt: any } | null, adminRights?: { __typename?: 'AdminRightsEntity', userId: number, accessMask: string, createdAt: any, updatedAt: any } | null } };

export type AdminFindAllUsersQueryVariables = Exact<{
  paginationInput: PaginationInput;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<UserSortingInput>;
}>;


export type AdminFindAllUsersQuery = { __typename?: 'Query', adminFindAll: { __typename?: 'UserPaginationResponseWithNext', data: Array<{ __typename?: 'UserInAdminEntity', id: number, email?: string | null, username?: string | null, referralCode: string, totalBalance: any, socialId?: string | null, avatarLink?: string | null, createdAt: any, isBlocked: boolean, authProvider: AuthProviderType, isEmailConfirmed: boolean, referrals: number }>, metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean } } };

export type GetPersonalInfoByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetPersonalInfoByUserQuery = { __typename?: 'Query', getPersonalInfo?: { __typename?: 'UserPersonalInfoEntity', id: number, email?: string | null, username?: string | null, referralCode: string, totalBalance: any, socialId?: string | null, avatarLink?: string | null, createdAt: any, isBlocked: boolean, authProvider: AuthProviderType, isEmailConfirmed: boolean, referrals: number, invitedUsername?: string | null, muteTimeDuration?: number | null, endBlocking?: any | null } | null };

export type GetUserWalletHistoryQueryVariables = Exact<{
  input: HistoryWalletTransactionsInput;
}>;


export type GetUserWalletHistoryQuery = { __typename?: 'Query', userWalletHistory: { __typename?: 'TransactionPaymentPaginatedResponse', metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean }, data: Array<{ __typename?: 'TransactionPaymentEntity', id: string, amount?: any | null, type: TransactionType, status: TransactionStatus, recipient?: string | null, destTag?: string | null, trackerId?: string | null, currencyId: number, userId: number, methodId?: number | null, currencyWalletId: number, createdAt: any, processedAt?: any | null, methodType: MethodType, method?: { __typename?: 'PaymentWithdrawalMethodsEntity', id: number, title: string, currencyType: CurrencyType, system: PaymentSystem, methodType: MethodType, direction: Direction, isEnabled: boolean, currencyId: number, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType } } | null, currencyWallet: { __typename?: 'CurrencyWalletEntity', id: number, balance: any, address?: string | null, destTag?: string | null, userId: number, currencyId: number, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType } }, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, user: { __typename?: 'UserEntity', username?: string | null, id: number, referralCode: string, totalBalance: any, createdAt: any, isEmailConfirmed: boolean, authProvider: AuthProviderType, anonymity?: { __typename?: 'AnonymityEntity', id: number, userId: number, local: boolean, server: boolean, createdAt: any, updatedAt: any } | null } }> } };

export type UserBonusHistoryQueryVariables = Exact<{
  input: TransactionLoyaltyProgramAdminInput;
}>;


export type UserBonusHistoryQuery = { __typename?: 'Query', admin__loyaltyProgramTransactions: { __typename?: 'PaginationTransactionLoyaltyProgram', metadata: { __typename?: 'PaginationMetadataWithNextEntity', prev: boolean, next: boolean }, data: Array<{ __typename?: 'TransactionLoyaltyProgramEntity', id: string, type: LoyaltyType, amount: any, currencyId: number, createdAt: any, percentage?: number | null, userId: number, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, user: { __typename?: 'UserEntity', username?: string | null, id: number, referralCode: string, totalBalance: any, createdAt: any, authProvider: AuthProviderType, isEmailConfirmed: boolean, anonymity?: { __typename?: 'AnonymityEntity', id: number, userId: number, local: boolean, server: boolean, createdAt: any, updatedAt: any } | null } }> } };

export type UserOverviewQueryVariables = Exact<{
  input: UserOverviewInput;
}>;


export type UserOverviewQuery = { __typename?: 'Query', userOverview: { __typename?: 'UserOverviewEntity', totalDeposits: number, referralCount: number, betAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, winAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, bonusAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, depositAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, withdrawalAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }>, ggrAmounts: Array<{ __typename?: 'CurrencyStatisticEntity', currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode, type: CurrencyType }, balance?: { __typename?: 'CurrencyAmountEntity', amount: any, amountUsd: any, amountRub: any } | null }> } };

export type AdminUpdateUserBalanceMutationVariables = Exact<{
  updateBalanceDto: UpdateBalanceDto;
}>;


export type AdminUpdateUserBalanceMutation = { __typename?: 'Mutation', adminUpdateUserBalance: { __typename?: 'CurrencyWalletEntity', id: number, balance: any, address?: string | null, destTag?: string | null, userId: number, currencyId: number } };

export type AdminUpdateUserDataMutationVariables = Exact<{
  updateUserDataDto: UpdateUserDataDto;
}>;


export type AdminUpdateUserDataMutation = { __typename?: 'Mutation', adminUpdateUserData: { __typename?: 'UserEntity', id: number, email?: string | null, username?: string | null, referralCode: string, totalBalance: any, socialId?: string | null, avatarLink?: string | null, createdAt: any, authProvider: AuthProviderType, isEmailConfirmed: boolean } };

export type BlockUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type BlockUserMutation = { __typename?: 'Mutation', blockUser: boolean };

export type UnBlockUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type UnBlockUserMutation = { __typename?: 'Mutation', unBlockUser: boolean };

export type MuteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  muteTimeDuration: Duration;
}>;


export type MuteUserMutation = { __typename?: 'Mutation', muteUser: boolean };

export type UnMuteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type UnMuteUserMutation = { __typename?: 'Mutation', unMuteUser: boolean };

export type CurrencyWalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrencyWalletsQuery = { __typename?: 'Query', currencyWallets: Array<{ __typename?: 'CurrencyWalletEntity', id: number, balance: any, userId: number, currencyId: number, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode } }> };

export type FindUserWalletsQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type FindUserWalletsQuery = { __typename?: 'Query', userWallets: Array<{ __typename?: 'CurrencyWalletEntity', id: number, address?: string | null, destTag?: string | null, userId: number, currencyId: number, balance: any, currency: { __typename?: 'CurrencyEntity', id: number, code: CurrencyCode } }> };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "AdminLogsEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AdminLogsPaginatedResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AdminLogsEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AdminRightsEntity",
        "fields": [
          {
            "name": "accessMask",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AnonymityEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "local",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "server",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AvailableWithdrawalEntity",
        "fields": [
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BoostEntity",
        "fields": [
          {
            "name": "boost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currencyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BoostInfoEntity",
        "fields": [
          {
            "name": "monthlyBoost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BoostEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "monthlyPercentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "timeToEndMonthlyJob",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "timeToEndWeeklyJob",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "weeklyBoost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "BoostEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "weeklyPercentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ChartReportEntity",
        "fields": [
          {
            "name": "details",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "partition",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreatedSessionEntity",
        "fields": [
          {
            "name": "launch_options",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LaunchOptionsEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CurrencyAmountEntity",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amountRub",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amountUsd",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CurrencyEntity",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CurrencyStatisticEntity",
        "fields": [
          {
            "name": "balance",
            "type": {
              "kind": "OBJECT",
              "name": "CurrencyAmountEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CurrencyWalletEntity",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "destTag",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DepositOutputEntity",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FavoriteGameEntity",
        "fields": [
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "identifier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "identifier2",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "payout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "producer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProducerEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "urlImage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameImageUrls",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameHistoryEntity",
        "fields": [
          {
            "name": "betAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "finished",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "gameTitle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isWon",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "multiplier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "result",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "winAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameHistoryPaginatedResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GameHistoryEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameImageSize",
        "fields": [
          {
            "name": "size",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GameImageUrls",
        "fields": [
          {
            "name": "s1",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameImageSize",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "s2",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameImageSize",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "s3",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameImageSize",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "s4",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameImageSize",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GamesPaginationResponse",
        "fields": [
          {
            "name": "countGames",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GameEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GlobalOverviewEntity",
        "fields": [
          {
            "name": "betAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "bonusAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "depositAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "firstDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "ggrAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "repeatedDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "winAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "withdrawalAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LastCredentialsEntity",
        "fields": [
          {
            "name": "currencyWalletId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "destTag",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methodType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "recipient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LaunchOptionsEntity",
        "fields": [
          {
            "name": "game_url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "strategy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LevelEntity",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "levelBonus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "levelName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "maxExperiencePoints",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "minExperiencePoints",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "nextLevelId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "abortActiveWithdrawal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TransactionPaymentEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "addFavoriteGame",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FavoriteGameEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "gameId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "addOrChangeEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminApproveTransactionAutomatically",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TransactionPaymentEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "approveAutomaticallyInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminApproveTransactionManually",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TransactionPaymentEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "approveManuallyInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminRejectTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TransactionPaymentEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "rejectInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminUpdateUserBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyWalletEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "UpdateBalanceDto",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminUpdateUserData",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "UpdateUserDataDto",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "approveAutomaticallyMultiple",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "approvalDetails",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "bannedUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "blockUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "changePassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "changePasswordInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "changeUsername",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createCryptoAddress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyWalletEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "createCryptoAddressInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteAvatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "deleteChatMessage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deposit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DepositOutputEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "depositInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "loadGames",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "logout",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "muteUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "muteTimeDuration",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "promocodeCreate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodeEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "createPromocodeInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "promocodeDelete",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodeEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "promocodeUpdate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodeEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updatePromocodeInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "recalculateUserReferralIncomes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "recoveryPassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "refreshTokens",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RefreshEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "removeFavoriteGame",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FavoriteGameEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "gameId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "removeUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resendVerifyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "revokeAdminPermissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "sendMailForRecoveryPassword",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "signIn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SignInDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "signInInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "signInAdmin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SignInDto",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "signInInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "signUp",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "signUpInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unBlockUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "unMuteUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "untieReferral",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAnonymity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnonymityEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updateAnonymityInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateAvatar",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "avatar",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateGameImages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updateProviderGameImages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "slug",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updateUserInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserPermissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "updateInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "usePromocode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "promocodeName",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "verifyCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "verifyCodeInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "withdrawBonus",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "currencyCode",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "withdrawRakeBake",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RakebackWithdrawalEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "withdrawReferralBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "withdrawal",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "WithdrawalOutputEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "withdrawalInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginatedUserReferralsResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReferralUserEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginatedUsersEntity",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginationMetadataWithNextEntity",
        "fields": [
          {
            "name": "next",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "prev",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginationReferralTransactionResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReferralTransactionEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaginationTransactionLoyaltyProgram",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TransactionLoyaltyProgramEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PaymentWithdrawalMethodsEntity",
        "fields": [
          {
            "name": "commissionIn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "commissionOut",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "commissionType",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currencyType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "direction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isEnabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "maxDeposit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "maxWithdraw",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methodType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "minDeposit",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "minWithdraw",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "networkCommissionIn",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "networkCommissionOut",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "system",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProducerEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "provider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProviderEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProducerWithCountEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "gameCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "providerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PromocodeEntity",
        "fields": [
          {
            "name": "Currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "activated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "activatedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "promocodeName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userPromocodeCreate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PromocodePaginatedResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PromocodeEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PromocodeWithoutUserCreatedEntity",
        "fields": [
          {
            "name": "Currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "activated",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "activatedCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "active",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "promocodeName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProviderEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "adminFindAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserPaginationResponseWithNext",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "paginationInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "search",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "adminGetWithdrawalMethodsForTransaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentWithdrawalMethodsEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "transactionId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminLogs",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AdminLogsPaginatedResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "PaginationArgsDto",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "adminSearch",
            "type": {
              "kind": "OBJECT",
              "name": "UserEntity",
              "ofType": null
            },
            "args": [
              {
                "name": "searchInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "admin__loyaltyProgramTransactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationTransactionLoyaltyProgram",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "admins",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginatedUsersEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "paginationArgs",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createGameDemo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreatedSessionEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "clientType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "game",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createSession",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CreatedSessionEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "currencies",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyWallet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyWalletEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyWallets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyWalletEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "favoriteUserGames",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GameEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "findOne",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "game",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "identifier",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "games",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GamesPaginationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "filterIn",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "paginationInput",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "getActiveWithdrawal",
            "type": {
              "kind": "OBJECT",
              "name": "TransactionPaymentEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "getHistoryPromocode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserPromocodeUsedEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getInfoBoost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "BoostInfoEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "getLastWithdrawalCredentials",
            "type": {
              "kind": "OBJECT",
              "name": "LastCredentialsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "getPersonalInfo",
            "type": {
              "kind": "OBJECT",
              "name": "UserPersonalInfoEntity",
              "ofType": null
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getReferralProgramStatistics",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReferralProgramStatisticEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "getTransactionUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TransactionPaymentEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "getUserLevel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserLevelEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "globalBetAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalBonusAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalDepositAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalGgrAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalOverview",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GlobalOverviewEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalWinAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "globalWithdrawalAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "headersGames",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GamesPaginationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "paginationInput",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "loyaltyProgramTransactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationTransactionLoyaltyProgram",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "myAnonymity",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AnonymityEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "myGameHistories",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GameHistoryPaginatedResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "pagination",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "myRakeBacks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RakebacksEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "myReferralBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReferralBalanceEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "paymentWithdrawalMethods",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PaymentWithdrawalMethodsEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "popularGames",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "GameEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "producers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ProducerWithCountEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "promocodeFindAll",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodePaginatedResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "filter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "paginationInput",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "search",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "promocodeFindOne",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodeEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "recommendedGame",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "GamesPaginationResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "identifier",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralCashoutHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationReferralTransactionResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "paginationInput",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsBetAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsBonusAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsDepositAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsGgrAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsOverview",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReferralsOverviewEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsProfitReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsWinAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "referralsWithdrawalAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userBetAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userBonusAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userDepositAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userGgrAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userOverview",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserOverviewEntity",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userReferrals",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginatedUserReferralsResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userWalletHistory",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TransactionPaymentPaginatedResponse",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userWallets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyWalletEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userWinAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "userWithdrawalAmountReport",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ChartReportEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RakebackEntity",
        "fields": [
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RakebackWithdrawalEntity",
        "fields": [
          {
            "name": "rakeback",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RakebackEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "wallet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyWalletEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RakebacksEntity",
        "fields": [
          {
            "name": "myRakebacks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RakebackEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "rakebackPercentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralBalanceEntity",
        "fields": [
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "claimedAmount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralProgramStatisticEntity",
        "fields": [
          {
            "name": "bets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "referrals",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "wagered",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ReferralProgramWageredEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralProgramWageredEntity",
        "fields": [
          {
            "name": "balance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralTransactionEntity",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "percentage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralUserEntity",
        "fields": [
          {
            "name": "adminRights",
            "type": {
              "kind": "OBJECT",
              "name": "AdminRightsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "anonymity",
            "type": {
              "kind": "OBJECT",
              "name": "AnonymityEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authProvider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "avatarLink",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endBlocking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "incomes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "isEmailConfirmed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "muteTimeDuration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "referralCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "socialId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReferralsOverviewEntity",
        "fields": [
          {
            "name": "availableWithdrawals",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AvailableWithdrawalEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "betAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "bonusAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "depositAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "firstDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "ggrAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "profitAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "referralCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "repeatedDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "winAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "withdrawalAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RefreshEntity",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SignInDto",
        "fields": [
          {
            "name": "isBlocked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TransactionLoyaltyProgramEntity",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "percentage",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TransactionPaymentEntity",
        "fields": [
          {
            "name": "amount",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amountRub",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "amountUsd",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currency",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currencyWallet",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "CurrencyWalletEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "currencyWalletId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "destTag",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "method",
            "type": {
              "kind": "OBJECT",
              "name": "PaymentWithdrawalMethodsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "methodId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "methodType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "processedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "processedByAdmin",
            "type": {
              "kind": "OBJECT",
              "name": "UserEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "processedByAdminId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "recipient",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "trackerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserEntity",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TransactionPaymentPaginatedResponse",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TransactionPaymentEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserEntity",
        "fields": [
          {
            "name": "adminRights",
            "type": {
              "kind": "OBJECT",
              "name": "AdminRightsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "anonymity",
            "type": {
              "kind": "OBJECT",
              "name": "AnonymityEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authProvider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "avatarLink",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endBlocking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isEmailConfirmed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "muteTimeDuration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "referralCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "socialId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserInAdminEntity",
        "fields": [
          {
            "name": "adminRights",
            "type": {
              "kind": "OBJECT",
              "name": "AdminRightsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "anonymity",
            "type": {
              "kind": "OBJECT",
              "name": "AnonymityEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authProvider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "avatarLink",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endBlocking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isBlocked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isEmailConfirmed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "muteTimeDuration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "referralCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "referrals",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "socialId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserLevelEntity",
        "fields": [
          {
            "name": "bonusUsed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "currentLevelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "experiencePoints",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "level",
            "type": {
              "kind": "OBJECT",
              "name": "LevelEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nextLevelName",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserOverviewEntity",
        "fields": [
          {
            "name": "betAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "bonusAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "depositAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "ggrAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "referralCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "totalDeposits",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "winAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "withdrawalAmounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CurrencyStatisticEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserPaginationResponseWithNext",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserInAdminEntity",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PaginationMetadataWithNextEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserPersonalInfoEntity",
        "fields": [
          {
            "name": "adminRights",
            "type": {
              "kind": "OBJECT",
              "name": "AdminRightsEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "anonymity",
            "type": {
              "kind": "OBJECT",
              "name": "AnonymityEntity",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authProvider",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "avatarLink",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "endBlocking",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "invitedUsername",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "isBlocked",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "isEmailConfirmed",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "muteTimeDuration",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "referralCode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "referrals",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "socialId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "totalBalance",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserPromocodeUsedEntity",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "promocode",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PromocodeWithoutUserCreatedEntity",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WithdrawalOutputEntity",
        "fields": [
          {
            "name": "isAccepted",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const AdminsLogsDocument = gql`
    query AdminsLogs($paginationArgsDto: PaginationArgsDto!) {
  adminLogs(PaginationArgsDto: $paginationArgsDto) {
    metadata {
      prev
      next
    }
    data {
      id
      message
      createdAt
      user {
        id
        username
      }
    }
  }
}
    `;

export function useAdminsLogsQuery(options: Omit<Urql.UseQueryArgs<AdminsLogsQueryVariables>, 'query'>) {
  return Urql.useQuery<AdminsLogsQuery, AdminsLogsQueryVariables>({ query: AdminsLogsDocument, ...options });
};
export const AdminsForDropDownDocument = gql`
    query AdminsForDropDown {
  admins(paginationArgs: {currentPage: 1, perPage: 100}) {
    data {
      id
      email
      username
      createdAt
    }
  }
}
    `;

export function useAdminsForDropDownQuery(options?: Omit<Urql.UseQueryArgs<AdminsForDropDownQueryVariables>, 'query'>) {
  return Urql.useQuery<AdminsForDropDownQuery, AdminsForDropDownQueryVariables>({ query: AdminsForDropDownDocument, ...options });
};
export const AdminsDocument = gql`
    query Admins($paginationArgs: AdminsPaginationInput!) {
  admins(paginationArgs: $paginationArgs) {
    data {
      id
      email
      username
      createdAt
      adminRights {
        userId
        accessMask
        createdAt
        updatedAt
      }
    }
    metadata {
      prev
      next
    }
  }
}
    `;

export function useAdminsQuery(options: Omit<Urql.UseQueryArgs<AdminsQueryVariables>, 'query'>) {
  return Urql.useQuery<AdminsQuery, AdminsQueryVariables>({ query: AdminsDocument, ...options });
};
export const RevokeAdminPermissionsDocument = gql`
    mutation RevokeAdminPermissions($userId: Int!) {
  revokeAdminPermissions(userId: $userId)
}
    `;

export function useRevokeAdminPermissionsMutation() {
  return Urql.useMutation<RevokeAdminPermissionsMutation, RevokeAdminPermissionsMutationVariables>(RevokeAdminPermissionsDocument);
};
export const SignInAdminDocument = gql`
    mutation SignInAdmin($email: String!, $password: String!) {
  signInAdmin(signInInput: {email: $email, password: $password}) {
    isBlocked
  }
}
    `;

export function useSignInAdminMutation() {
  return Urql.useMutation<SignInAdminMutation, SignInAdminMutationVariables>(SignInAdminDocument);
};
export const LogOutDocument = gql`
    mutation LogOut {
  logout
}
    `;

export function useLogOutMutation() {
  return Urql.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument);
};
export const RefreshTokensDocument = gql`
    mutation RefreshTokens {
  refreshTokens {
    accessToken
  }
}
    `;

export function useRefreshTokensMutation() {
  return Urql.useMutation<RefreshTokensMutation, RefreshTokensMutationVariables>(RefreshTokensDocument);
};
export const CurrenciesDocument = gql`
    query Currencies {
  currencies {
    id
    code
    type
  }
}
    `;

export function useCurrenciesQuery(options?: Omit<Urql.UseQueryArgs<CurrenciesQueryVariables>, 'query'>) {
  return Urql.useQuery<CurrenciesQuery, CurrenciesQueryVariables>({ query: CurrenciesDocument, ...options });
};
export const PromocodeFindAllDocument = gql`
    query PromocodeFindAll($paginationInput: PaginationInput, $sort: SortPromocode, $filter: PromocodeFilter, $search: String) {
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
    `;

export function usePromocodeFindAllQuery(options?: Omit<Urql.UseQueryArgs<PromocodeFindAllQueryVariables>, 'query'>) {
  return Urql.useQuery<PromocodeFindAllQuery, PromocodeFindAllQueryVariables>({ query: PromocodeFindAllDocument, ...options });
};
export const PromocodeFindOneDocument = gql`
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
    `;

export function usePromocodeFindOneQuery(options: Omit<Urql.UseQueryArgs<PromocodeFindOneQueryVariables>, 'query'>) {
  return Urql.useQuery<PromocodeFindOneQuery, PromocodeFindOneQueryVariables>({ query: PromocodeFindOneDocument, ...options });
};
export const PromocodeCreateDocument = gql`
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
    `;

export function usePromocodeCreateMutation() {
  return Urql.useMutation<PromocodeCreateMutation, PromocodeCreateMutationVariables>(PromocodeCreateDocument);
};
export const PromocodeUpdateDocument = gql`
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
    `;

export function usePromocodeUpdateMutation() {
  return Urql.useMutation<PromocodeUpdateMutation, PromocodeUpdateMutationVariables>(PromocodeUpdateDocument);
};
export const PromocodeDeleteDocument = gql`
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
    `;

export function usePromocodeDeleteMutation() {
  return Urql.useMutation<PromocodeDeleteMutation, PromocodeDeleteMutationVariables>(PromocodeDeleteDocument);
};
export const FindUserReferralsDocument = gql`
    query FindUserReferrals($input: UserReferralsInput!) {
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
    `;

export function useFindUserReferralsQuery(options: Omit<Urql.UseQueryArgs<FindUserReferralsQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserReferralsQuery, FindUserReferralsQueryVariables>({ query: FindUserReferralsDocument, ...options });
};
export const ReferralsOverviewDocument = gql`
    query ReferralsOverview($input: ReferralsOverviewInput!) {
  referralsOverview(input: $input) {
    totalDeposits
    firstDeposits
    repeatedDeposits
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
    profitAmounts {
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
    availableWithdrawals {
      balance
      currency {
        id
        code
        type
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
  }
}
    `;

export function useReferralsOverviewQuery(options: Omit<Urql.UseQueryArgs<ReferralsOverviewQueryVariables>, 'query'>) {
  return Urql.useQuery<ReferralsOverviewQuery, ReferralsOverviewQueryVariables>({ query: ReferralsOverviewDocument, ...options });
};
export const UntieReferralDocument = gql`
    mutation UntieReferral($userId: Int!) {
  untieReferral(userId: $userId) {
    id
    referralCode
    totalBalance
    createdAt
    authProvider
  }
}
    `;

export function useUntieReferralMutation() {
  return Urql.useMutation<UntieReferralMutation, UntieReferralMutationVariables>(UntieReferralDocument);
};
export const RecalculateUserReferralIncomesDocument = gql`
    mutation RecalculateUserReferralIncomes($userId: Int!) {
  recalculateUserReferralIncomes(userId: $userId)
}
    `;

export function useRecalculateUserReferralIncomesMutation() {
  return Urql.useMutation<RecalculateUserReferralIncomesMutation, RecalculateUserReferralIncomesMutationVariables>(RecalculateUserReferralIncomesDocument);
};
export const AdminRejectTransactionDocument = gql`
    mutation AdminRejectTransaction($rejectInput: RejectInput!) {
  adminRejectTransaction(rejectInput: $rejectInput) {
    id
  }
}
    `;

export function useAdminRejectTransactionMutation() {
  return Urql.useMutation<AdminRejectTransactionMutation, AdminRejectTransactionMutationVariables>(AdminRejectTransactionDocument);
};
export const AdminApproveTransactionManuallyDocument = gql`
    mutation AdminApproveTransactionManually($approveManuallyInput: ApproveManuallyInput!) {
  adminApproveTransactionManually(approveManuallyInput: $approveManuallyInput) {
    id
  }
}
    `;

export function useAdminApproveTransactionManuallyMutation() {
  return Urql.useMutation<AdminApproveTransactionManuallyMutation, AdminApproveTransactionManuallyMutationVariables>(AdminApproveTransactionManuallyDocument);
};
export const GetMeDocument = gql`
    query getMe {
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
    `;

export function useGetMeQuery(options?: Omit<Urql.UseQueryArgs<GetMeQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMeQuery, GetMeQueryVariables>({ query: GetMeDocument, ...options });
};
export const AdminFindAllUsersDocument = gql`
    query AdminFindAllUsers($paginationInput: PaginationInput!, $search: String, $sort: UserSortingInput) {
  adminFindAll(paginationInput: $paginationInput, sort: $sort, search: $search) {
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
    `;

export function useAdminFindAllUsersQuery(options: Omit<Urql.UseQueryArgs<AdminFindAllUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<AdminFindAllUsersQuery, AdminFindAllUsersQueryVariables>({ query: AdminFindAllUsersDocument, ...options });
};
export const GetPersonalInfoByUserDocument = gql`
    query GetPersonalInfoByUser($userId: Int!) {
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
    `;

export function useGetPersonalInfoByUserQuery(options: Omit<Urql.UseQueryArgs<GetPersonalInfoByUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPersonalInfoByUserQuery, GetPersonalInfoByUserQueryVariables>({ query: GetPersonalInfoByUserDocument, ...options });
};
export const GetUserWalletHistoryDocument = gql`
    query GetUserWalletHistory($input: HistoryWalletTransactionsInput!) {
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
    `;

export function useGetUserWalletHistoryQuery(options: Omit<Urql.UseQueryArgs<GetUserWalletHistoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserWalletHistoryQuery, GetUserWalletHistoryQueryVariables>({ query: GetUserWalletHistoryDocument, ...options });
};
export const UserBonusHistoryDocument = gql`
    query UserBonusHistory($input: TransactionLoyaltyProgramAdminInput!) {
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
    `;

export function useUserBonusHistoryQuery(options: Omit<Urql.UseQueryArgs<UserBonusHistoryQueryVariables>, 'query'>) {
  return Urql.useQuery<UserBonusHistoryQuery, UserBonusHistoryQueryVariables>({ query: UserBonusHistoryDocument, ...options });
};
export const UserOverviewDocument = gql`
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
    `;

export function useUserOverviewQuery(options: Omit<Urql.UseQueryArgs<UserOverviewQueryVariables>, 'query'>) {
  return Urql.useQuery<UserOverviewQuery, UserOverviewQueryVariables>({ query: UserOverviewDocument, ...options });
};
export const AdminUpdateUserBalanceDocument = gql`
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
    `;

export function useAdminUpdateUserBalanceMutation() {
  return Urql.useMutation<AdminUpdateUserBalanceMutation, AdminUpdateUserBalanceMutationVariables>(AdminUpdateUserBalanceDocument);
};
export const AdminUpdateUserDataDocument = gql`
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
    `;

export function useAdminUpdateUserDataMutation() {
  return Urql.useMutation<AdminUpdateUserDataMutation, AdminUpdateUserDataMutationVariables>(AdminUpdateUserDataDocument);
};
export const BlockUserDocument = gql`
    mutation BlockUser($userId: Int!) {
  blockUser(userId: $userId)
}
    `;

export function useBlockUserMutation() {
  return Urql.useMutation<BlockUserMutation, BlockUserMutationVariables>(BlockUserDocument);
};
export const UnBlockUserDocument = gql`
    mutation UnBlockUser($userId: Int!) {
  unBlockUser(userId: $userId)
}
    `;

export function useUnBlockUserMutation() {
  return Urql.useMutation<UnBlockUserMutation, UnBlockUserMutationVariables>(UnBlockUserDocument);
};
export const MuteUserDocument = gql`
    mutation MuteUser($userId: Int!, $muteTimeDuration: Duration!) {
  muteUser(userId: $userId, muteTimeDuration: $muteTimeDuration)
}
    `;

export function useMuteUserMutation() {
  return Urql.useMutation<MuteUserMutation, MuteUserMutationVariables>(MuteUserDocument);
};
export const UnMuteUserDocument = gql`
    mutation UnMuteUser($userId: Int!) {
  unMuteUser(userId: $userId)
}
    `;

export function useUnMuteUserMutation() {
  return Urql.useMutation<UnMuteUserMutation, UnMuteUserMutationVariables>(UnMuteUserDocument);
};
export const CurrencyWalletsDocument = gql`
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
    `;

export function useCurrencyWalletsQuery(options?: Omit<Urql.UseQueryArgs<CurrencyWalletsQueryVariables>, 'query'>) {
  return Urql.useQuery<CurrencyWalletsQuery, CurrencyWalletsQueryVariables>({ query: CurrencyWalletsDocument, ...options });
};
export const FindUserWalletsDocument = gql`
    query FindUserWallets($userId: Int!) {
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
    `;

export function useFindUserWalletsQuery(options: Omit<Urql.UseQueryArgs<FindUserWalletsQueryVariables>, 'query'>) {
  return Urql.useQuery<FindUserWalletsQuery, FindUserWalletsQueryVariables>({ query: FindUserWalletsDocument, ...options });
};
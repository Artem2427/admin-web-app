import { Icons } from '@/assets'
import { DropdownItem } from '@/components/dropdown/Dropdown'
import { SelectItem } from '@/components/select/Select'
import {
  Duration,
  LoyaltyType,
  MethodType,
  TransactionStatus,
} from '@/generated/graphql'
import { Permission, permissions } from '@vega/permissions'

export const Routes = {
  Overview: '/',
  Login: '/login',
  Users: '/users',
  User: '/users/:userId',
  Promocode: '/promocode',
  Withdrawals: '/transactions/?tab=withdrawals',
  Referrals: '/users/:userId/referrals',
  Transactions: '/transactions',
  AdminAccess: '/admin-access',
} as const

export const RouteKeys = {
  Overview: 'overview',
  Login: 'login',
  Users: 'users',
  User: 'user',
  Withdrawals: 'withdrawals',
  Promocode: 'promocode',
  Referrals: 'referrals',
  Transactions: 'transactions',
  AdminAccess: 'admin-access',
} as const

export type RouteKey = (typeof RouteKeys)[keyof typeof RouteKeys]
export type RoutePath = (typeof Routes)[keyof typeof Routes]

export type PageNavigation = {
  href: RoutePath
  key: RouteKey
  label: string
  permission: Permission
}

export const pagesNavigation: PageNavigation[] = [
  {
    href: Routes.Overview,
    key: RouteKeys.Overview,
    label: 'Overview',
    permission: permissions.overview.view,
  },
  {
    href: Routes.Users,
    key: RouteKeys.Users,
    label: 'Users',
    permission: permissions.users.view,
  },
  {
    href: Routes.Transactions,
    key: RouteKeys.Transactions,
    label: 'Transactions',
    permission: permissions.transactions.view,
  },
  {
    href: Routes.Withdrawals,
    key: RouteKeys.Withdrawals,
    label: 'Withdrawals',
    permission: permissions.withdrawals.view,
  },
  {
    href: Routes.Promocode,
    key: RouteKeys.Promocode,
    label: 'Promo',
    permission: permissions.promo.view,
  },
  {
    href: Routes.AdminAccess,
    key: RouteKeys.AdminAccess,
    label: 'Admin access',
    permission: permissions.adminAccess.view,
  },
]

export const muteOptions: SelectItem[] = [
  {
    id: Duration.FiveMinutes,
    label: 'Mute for 5 min',
    value: Duration.FiveMinutes,
  },
  {
    id: Duration.FifteenMinutes,
    label: 'Mute for 15 min',
    value: Duration.FifteenMinutes,
  },
  {
    id: Duration.ThirtyMinutes,
    label: 'Mute for 30 min',
    value: Duration.ThirtyMinutes,
  },
  {
    id: Duration.OneHour,
    label: 'Mute for 1 hour',
    value: Duration.OneHour,
  },
]

export const historyWalletTabs = {
  deposits: 'deposits',
  withdrawals: 'withdrawals',
  bonuses: 'bonuses',
} as const

export type HistoryWalletTabsType = ValueOf<typeof historyWalletTabs>

export const adminAccessTabs = {
  admins: 'admins',
  logs: 'logs',
} as const

export type AdminAccessTab = ValueOf<typeof adminAccessTabs>

export const defaultWalletStatusOptions: DropdownItem[] = [
  {
    type: 'checkbox',
    checked: false,
    label: 'Confirmed',
    id: TransactionStatus.Confirmed,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Rejected',
    id: TransactionStatus.Rejected,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'In processing',
    id: TransactionStatus.InProgress,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Fail',
    id: TransactionStatus.Failed,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Reviewing',
    id: TransactionStatus.Reviewing,
  },
]

export const defaultBonusStatusOptions: DropdownItem[] = [
  {
    type: 'checkbox',
    checked: false,
    label: 'Level Bonus',
    id: LoyaltyType.LevelBonus,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Promocode',
    id: LoyaltyType.Promocode,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Rakeback',
    id: LoyaltyType.Rakeback,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Reload Monthly',
    id: LoyaltyType.ReloadMonthly,
  },
  {
    type: 'checkbox',
    checked: false,
    label: 'Weekly Boost',
    id: LoyaltyType.WeeklyBoost,
  },
]

export const adminTableActions = {
  edit: 'edit',
  delete: 'delete',
} as const

export type AdminTableActionType = ValueOf<typeof adminTableActions>

type MethodImages = {
  [key in MethodType]?: { url: string }
}

export const paymentMethodImages: MethodImages = {
  [MethodType.Card]: { url: '/payment-methods/p2p.png' },
  [MethodType.Piastrix]: { url: '/payment-methods/plastrix.png' },
  [MethodType.Qiwi]: { url: '/payment-methods/qiwi.png' },
  [MethodType.FkWallet]: { url: '/payment-methods/fk-wallet.png' },
  [MethodType.Yoomoney]: { url: '/payment-methods/yoo-money.png' },
  [MethodType.Sbp]: { url: '/payment-methods/fps.png' },
}

const statusVariants = {
  default: 'default',
  reviewing: 'reviewing',
  rejected: 'reject',
  confirmed: 'confirm',
  processing: 'processing',
} as const

type StatusVariant = ValueOf<typeof statusVariants>

type TransactionStatusType = {
  [key in TransactionStatus]: {
    label: string
    variant: StatusVariant
  }
}

export const transactionStatuses: TransactionStatusType = {
  [TransactionStatus.Confirmed]: {
    label: 'Confirmed',
    variant: statusVariants.default,
  },
  [TransactionStatus.Rejected]: {
    label: 'Rejected',
    variant: statusVariants.rejected,
  },
  [TransactionStatus.InProgress]: {
    label: 'In processing',
    variant: statusVariants.processing,
  },
  [TransactionStatus.Failed]: {
    label: 'Fail',
    variant: statusVariants.rejected,
  },
  [TransactionStatus.Reviewing]: {
    label: 'Reviewing',
    variant: statusVariants.reviewing,
  },
  [TransactionStatus.Aborted]: {
    label: 'Aborted',
    variant: statusVariants.processing,
  },
}

type TransactionBonusStatusType = {
  [key in LoyaltyType]: {
    label: string
    variant: StatusVariant
  }
}

export const transactionBonusStatuses: TransactionBonusStatusType = {
  [LoyaltyType.LevelBonus]: {
    label: 'Level Bonus',
    variant: statusVariants.default,
  },
  [LoyaltyType.Promocode]: {
    label: 'Promocode',
    variant: statusVariants.default,
  },
  [LoyaltyType.Rakeback]: {
    label: 'Rakeback',
    variant: statusVariants.default,
  },
  [LoyaltyType.ReloadMonthly]: {
    label: 'Reload Monthly',
    variant: statusVariants.default,
  },
  [LoyaltyType.WeeklyBoost]: {
    label: 'Weekly Boost',
    variant: statusVariants.default,
  },
}

export const userOverviewMetricsKeys = {
  totalDeposits: 'totalDeposits',
  referralCount: 'referralCount',
  betAmounts: 'betAmounts',
  winAmounts: 'winAmounts',
  bonusAmounts: 'bonusAmounts',
  depositAmounts: 'depositAmounts',
  withdrawalAmounts: 'withdrawalAmounts',
  ggrAmounts: 'ggrAmounts',
} as const

export type UserOverviewKey = ValueOf<typeof userOverviewMetricsKeys>

type UserOverviewMetrics = {
  [Key in UserOverviewKey]: {
    id: Key
    label: string
    icon: keyof typeof Icons
  }
}

export const userOverviewMetrics: UserOverviewMetrics = {
  [userOverviewMetricsKeys.totalDeposits]: {
    id: userOverviewMetricsKeys.totalDeposits,
    label: 'Amount of deposits',
    icon: 'Wallet',
  },
  [userOverviewMetricsKeys.referralCount]: {
    id: userOverviewMetricsKeys.referralCount,
    label: 'Referrals',
    icon: 'Users', // TODO check
  },
  [userOverviewMetricsKeys.betAmounts]: {
    id: userOverviewMetricsKeys.betAmounts,
    label: 'Amount of bets',
    icon: 'Bets',
  },
  [userOverviewMetricsKeys.winAmounts]: {
    id: userOverviewMetricsKeys.winAmounts,
    label: 'The amount of winnings',
    icon: 'Winnings',
  },
  [userOverviewMetricsKeys.bonusAmounts]: {
    id: userOverviewMetricsKeys.bonusAmounts,
    label: 'The amount of winnings',
    icon: 'BonusAmount',
  },
  [userOverviewMetricsKeys.depositAmounts]: {
    id: userOverviewMetricsKeys.depositAmounts,
    label: 'Total deposits',
    icon: 'Deposit',
  },
  [userOverviewMetricsKeys.withdrawalAmounts]: {
    id: userOverviewMetricsKeys.withdrawalAmounts,
    label: 'Total withdrawals',
    icon: 'Withdrawals',
  },
  [userOverviewMetricsKeys.ggrAmounts]: {
    id: userOverviewMetricsKeys.ggrAmounts,
    label: 'GGR',
    icon: 'Ggr',
  },
}

export const EMPTY_VALUE = '---'

export const TAB_SEARCH_PARAM = 'tab'
export const USER_SEARCH_PARAM = 'user'

const now = new Date()
export const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
export const startOfNextMonth = new Date(
  now.getFullYear(),
  now.getMonth() + 1,
  1,
)

export const ITEMS_PER_PAGE = ['10', '20', '30', '40', '50']

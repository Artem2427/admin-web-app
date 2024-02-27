import { CurrencyCode } from '@/gql/graphql'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const AMOUNT_REGEX_TEST = /^\d+(\.\d{0,2})?$/

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculatePercentage(current: number, maximum: number): number {
  if (maximum !== 0) {
    return (current * 100) / maximum
  }

  return 0
}

export function formatCurrencyValue(value: string): string | null {
  const newValue = value.replace(/,/g, '')

  if (newValue === '') {
    return ''
  }

  if (newValue.includes('.') && newValue.split('.')[1].length <= 2) {
    return value
  }

  if (!AMOUNT_REGEX_TEST.test(newValue)) {
    return null
  }

  if (newValue.includes('.')) {
    const [wholePart, decimalPart] = newValue.split('.')
    const formattedWhole = new Intl.NumberFormat('en-US').format(
      Number(wholePart),
    )
    return `${formattedWhole}.${decimalPart}`
  }

  return new Intl.NumberFormat('en-US').format(parseInt(newValue, 10))
}

export function removeCommasAndConvertToNumber(stringValue: string): string {
  const withoutCommas = stringValue.replace(/,/g, '')

  return withoutCommas
}

export function convertCurrencyWithComma(number: number | string): string {
  const fixedNumber = parseFloat(number.toString()).toFixed(2)

  const parts = fixedNumber.split('.')

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return parts.join('.')
}

export function capitalize(str: string): string {
  if (!str) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function countTotalAmount<
  T extends { amountUsd: number; amountRub: number },
>(selected: CurrencyCode, values: T[]) {
  return values.reduce((acc, cur) => acc + selectAmount(cur, selected), 0)
}

export function selectAmount<
  T extends { amountUsd: number; amountRub: number },
>(value: T, selected: CurrencyCode) {
  return selected === CurrencyCode.Rub
    ? Number(value.amountRub)
    : Number(value.amountUsd)
}

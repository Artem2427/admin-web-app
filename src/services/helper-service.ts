import { Icons } from '@/assets'
import { CurrencyCode } from '@/generated/graphql'

export type IconComponent = keyof typeof Icons

class HelperService {
  public transformCurrencyCodeToIcon(
    code: CurrencyCode | string,
  ): IconComponent {
    if (code.toString().includes('USDT')) {
      return 'Usdt'
    }

    return this.formatCode(code)
  }

  private formatCode(code: string): IconComponent {
    return (code.charAt(0) + code.slice(1).toLowerCase()) as IconComponent
  }
}

export const helperService = new HelperService()

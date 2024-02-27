import { cn } from '@/utils/utils'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        confirm:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        default: 'border-transparent bg-lime-400 text-white',
        reject: 'border-transparent bg-destructive text-destructive-foreground',
        reviewing: 'text-foreground',
        processing: 'border-transparent bg-secondary-light text-gray-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Badge, badgeVariants }

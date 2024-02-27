import { cn } from '@/utils/utils'
import React, { FC, ReactNode } from 'react'

import Button from '../button/Button'
import { Icon } from '../icon/Icon'
import { ButtonProps } from '../ui/button'

type Props = {
  titles: string[]
  className?: string
  rightElement?: ReactNode
  backButtonOptions?: ButtonProps
}

export const PageTitle: FC<Props> = ({
  titles,
  rightElement,
  className,
  backButtonOptions,
}) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex gap-[18px]">
        {backButtonOptions && (
          <Button {...backButtonOptions} className="w-9 rounded-lg p-0">
            <Icon component="ArrowLeft" />
          </Button>
        )}

        <div className="flex items-center gap-[18px]">
          {titles.map((title, index) => {
            const isLastItem = titles.length === index + 1

            return (
              <React.Fragment key={index}>
                <h2
                  className={cn('text-3xl font-semibold tracking-tight', {
                    'text-primary': isLastItem,
                    'text-gray-text': !isLastItem,
                  })}
                >
                  {title}
                </h2>
                {!isLastItem && titles.length > 1 && (
                  <div className="w-[30px] h-px bg-gray-text" />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
      {rightElement ? rightElement : null}
    </div>
  )
}

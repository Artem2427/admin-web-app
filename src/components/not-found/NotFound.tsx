import { IconComponent } from '@/services/helper-service'
import { FC } from 'react'

import Button from '../button/Button'
import { Icon } from '../icon/Icon'
import { ButtonProps } from '../ui/button'

type Props = {
  title?: string
  description?: string
  icon: IconComponent
  buttonProps?: ButtonProps & { label: string }
}

const NotFound: FC<Props> = ({
  title = 'Nothing found',
  icon,
  description,
  buttonProps,
}) => {
  return (
    <div style={{ height: '55vh' }}>
      <div className="flex flex-col gap-[16px] justify-center items-center h-full">
        <Icon component={icon} />
        <div className="flex flex-col gap-[8px] justify-center">
          <h3 className="text-center font-semibold text-lg">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
        {buttonProps && (
          <Button size="sm" className="h-[32px]" {...buttonProps}>
            {buttonProps.label}
          </Button>
        )}
      </div>
    </div>
  )
}

export default NotFound

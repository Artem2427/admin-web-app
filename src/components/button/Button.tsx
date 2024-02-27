import { Button as CustomButton } from '@/components/ui/button'
import { FC, Ref } from 'react'

import { Icon } from '../icon/Icon'
import { ButtonProps } from '../ui/button'

type Props = {
  loading?: boolean
  refProp?: Ref<HTMLButtonElement>
}

const Button: FC<Props & ButtonProps> = ({
  loading,
  refProp,
  children,
  ...props
}) => {
  return (
    <CustomButton {...props} ref={refProp}>
      {loading ? (
        <Icon component="Preloader" className="w-4 h-4 preloader" />
      ) : (
        children
      )}
    </CustomButton>
  )
}

export default Button

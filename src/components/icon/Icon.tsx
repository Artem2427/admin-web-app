import React from 'react'

import { Icons } from '../../assets'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  component: keyof typeof Icons
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ component, ...props }, ref) => {
    const IconComponent = Icons[component]
    return <IconComponent ref={ref} {...props} />
  },
)

export { Icon }

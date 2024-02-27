import { FC, PropsWithChildren } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type Props = {
  title: string
}

const ChartWrapper: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">{children}</CardContent>
    </Card>
  )
}

export default ChartWrapper

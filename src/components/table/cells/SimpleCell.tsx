import { FC, PropsWithChildren } from 'react'

const SimpleCell: FC<PropsWithChildren> = ({ children }) => {
  return <div className="whitespace-nowrap">{children}</div>
}

export default SimpleCell

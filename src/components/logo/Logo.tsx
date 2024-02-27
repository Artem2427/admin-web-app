import { FC } from 'react'

type Props = {
  className?: string
  onClick?: () => void
}

const Logo: FC<Props> = ({ className, onClick }) => {
  return (
    <img src="/Logo.svg" alt="Logo" className={className} onClick={onClick} />
  )
}

export default Logo

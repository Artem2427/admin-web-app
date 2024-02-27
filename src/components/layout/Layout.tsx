import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 p-8 overflow-x-hidden relative">{children}</main>
    </>
  )
}

export default Layout

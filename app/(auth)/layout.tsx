import { FC, PropsWithChildren } from 'react'

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({children}) => {
  return <div className='flex h-full justify-center items-center'>
    {children}
  </div>
}

export default Layout
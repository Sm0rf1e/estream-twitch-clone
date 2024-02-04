import { getSelf } from '@/lib/auth-service'
import { redirect } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import Navbar from './_components/navbar'
import {Sidebar} from './_components/sidebar'
import Container from './_components/container'

interface CreatorLayoutProps {
  params: {
    username: string
  }
}

const CreatorLayout: FC<PropsWithChildren<CreatorLayoutProps>> = async ({params, children}) => {
  const self = await getSelf()

  if (!self) redirect('/')

  return <>
    <Navbar/>
    <div className='flex h-full pt-20'>
      <Sidebar/>
      <Container>
        {children}
      </Container>
    </div>
  </>
}

export default CreatorLayout
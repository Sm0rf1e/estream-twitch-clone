import { NextPage } from 'next'
import Navbar from './_components/navbar'
import { PropsWithChildren, Suspense } from 'react'
import { Sidebar, SidebarSkeleton } from './_components/sidebar'
import Container from './_components/container'


interface Props {}

const BrowseLayout: NextPage<PropsWithChildren<Props>> = ({children}) => {
  return <>
    <Navbar/>
    <div className='flex h-full pt-20'>
      <Suspense fallback={<SidebarSkeleton/>}>
        <Sidebar/>
      </Suspense>
      <Container>
        {children}
      </Container>
    </div>
  </>
}

export default BrowseLayout
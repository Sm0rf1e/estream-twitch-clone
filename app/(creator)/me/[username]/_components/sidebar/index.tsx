import { FC } from 'react'
import Wrapper from './wrapper'
import { Toggle, ToggleSkeleton } from './toggle'
import Navigation from './navigation'

interface Props {}

export const Sidebar: FC<Props> = ({}) => {
  return <Wrapper>
    <Toggle/>
    <Navigation/>
  </Wrapper>
}

export const SidebarSkeleton: FC = () => {
  return <>
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60
    h-full bg-background border-r border-[#2D2E35] z-50'>
      <ToggleSkeleton/>
    </aside>
  </>
}
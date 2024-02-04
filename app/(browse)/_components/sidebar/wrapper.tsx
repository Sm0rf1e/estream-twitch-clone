"use client"

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'
import { useIsClient } from 'usehooks-ts'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ToggleSkeleton } from './toggle'
import { RecommendedSkeleton } from './recommended'
import { FollowingSkeleton } from './following'

interface Props {}

const Wrapper: FC<PropsWithChildren<Props>> = ({children}) => {
  const isClient = useIsClient()
  const { collapsed } = useSidebar((state) => state)

  if (!isClient) return (
    <aside className='fixed
    left-0 flex flex-col h-full w-[70px] lg:w-60 bg-background border-r border-[#2D2E35] z-50'>
      <ToggleSkeleton/>
      <FollowingSkeleton/>
      <RecommendedSkeleton/>
    </aside>
  )

  return <aside className={cn(
  'fixed left-0 flex flex-col h-full w-60 bg-background border-r border-[#2D2E35] z-50',
  collapsed && 'w-[70px]')}>
    {children}
  </aside>
}

export default Wrapper
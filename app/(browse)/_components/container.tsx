"use client"

import { cn } from '@/lib/utils'
import { useSidebar } from '@/store/use-sidebar'
import { useEffect } from 'react'
import { FC, PropsWithChildren } from 'react'
import { useMediaQuery } from 'usehooks-ts'

interface ContainerProps {}

const Container: FC<PropsWithChildren<ContainerProps>> = ({children}) => {
  const {collapsed, onCollapse, onExpand} = useSidebar((state) => state)
  const matches = useMediaQuery("(max-width: 1024px)")
  useEffect(() => {
    if (matches) onCollapse()
    else onExpand()
  }, [matches])
  return <div className={cn(
    "flex-1 mt-[20px] px-6",
    collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
  )}>
    {children}
  </div>
}

export default Container
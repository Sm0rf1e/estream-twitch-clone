"use client"

import { useSidebar } from '@/store/use-sidebar'
import { User } from '@prisma/client'
import { FC } from 'react'
import { UserItem, UserItemSkeleton } from './user-item'

interface RecommendedProps {
  data: (User & {
    stream: {isLive: boolean} | null
  })[]
}

export const Recommended: FC<RecommendedProps> = ({data}) => {
  const {collapsed} = useSidebar((state) => state)
  const showLabel = !collapsed && data.length > 0;

  return <>
    {showLabel && (
      <div className='pl-6 mb-4'>
        <p className='text-sm text-muted-foreground'>
          Recommended
        </p>
      </div>
    )}
    <ul className='space-y-2 px-2'>
      {data.map((user) => (
        <UserItem
        username={user.username}
        imageUrl={user.imageUrl}
        key={user.id}
        isLive={user.stream?.isLive}/>
      ))}
    </ul>
  </>
}

export const RecommendedSkeleton: FC = () => {
  return <>
    <ul className='px-2'>
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i}/>
      ))}
    </ul>
  </>
}
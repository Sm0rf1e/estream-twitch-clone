"use client"

import { useSidebar } from '@/store/use-sidebar'
import { Follow, User } from '@prisma/client'
import { UserItem, UserItemSkeleton } from './user-item'
import { FC } from 'react'

interface FollowingProps {
  data: (Follow & {
      following: User & {
      stream: {isLive: boolean} | null
    }
  })[]
}

export const Following: FC<FollowingProps> = ({data}) => {
  const {collapsed} = useSidebar((state) => state)

  if (!data.length) {
    return null
  }

  return <div>
    {!collapsed && (
      <div className='pl-6 mb-4'>
        <p className='text-sm text-muted-foreground'>
          Following
        </p>
      </div>
    )}
    <ul className='space-y-2 px-2'>
      {data.map((follow) => (
        <UserItem
          username={follow.following.username}
          imageUrl={follow.following.imageUrl}
          key={follow.following.id}
          isLive={follow.following.stream?.isLive}
        />
      ))}
    </ul>
  </div>
}

export const FollowingSkeleton: FC = () => {
  return <>
    <ul className='px-2 pt-2 lg:pt-0'>
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i}/>
      ))}
    </ul>
  </>
}
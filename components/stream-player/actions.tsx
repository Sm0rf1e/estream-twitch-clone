'use client'

import { FC, useTransition } from 'react'
import { Button } from '../ui/button'
import { useAuth } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { onFollow, unFollow } from '@/actions/follow'
import { Skeleton } from '../ui/skeleton'

interface ActionsProps {
  hostIdentity: string
  isFollowing: boolean
  isHost: boolean
}

export const Actions: FC<ActionsProps> = ({hostIdentity, isFollowing, isHost}) => {
  const {userId} = useAuth()
  const {push} = useRouter()
  const [isPending, startTransition] = useTransition()

  const toggleFollow = () => {
    if (!userId) {
     return push('sign-in')
    }

    if (isHost) return

    if (isFollowing) {
      startTransition(() => {
        onFollow(hostIdentity)
      })
    } else {
      startTransition(() => {
        unFollow(hostIdentity)
      })
    }
  }

  return <>
    <Button
      disabled={isPending}
      onClick={toggleFollow}
      variant='primary'
      size='sm'
      className='w-full lg:w-auto'
    >
      <Heart className={cn(
        'h-4 w-4 mr-2',
        isFollowing
        ? 'fill-white'
        : 'fill-none'
      )}/>
      {isFollowing
      ? 'Unfollow'
      : 'Follow'
      }
    </Button>
  </>
}

export const ActionsSkeleton: FC = () => {
  return <>
    <Skeleton className='h-10 w-full lg:w-24'/>
  </>
}
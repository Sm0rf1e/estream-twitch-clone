'use client'

import { onBlock } from '@/actions/block'
import { onFollow, unFollow } from '@/actions/follow'
import { Button } from '@/components/ui/button'
import { FC, useTransition } from 'react'

interface ActionsProps {
  isFollowing: boolean
  userId: string
}

const Actions: FC<ActionsProps> = ({isFollowing, userId}) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      isFollowing ? unFollow(userId)
      : onFollow(userId)
    })
  }

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
    })
  }

  return <>
    <Button
      disabled={isPending}
      onClick={onClick}
      variant='primary'
      className='flex w-fit'>
      {isFollowing ? 'Unfollow': 'Follow'}
    </Button>
    <Button
      disabled={isPending}
      onClick={handleBlock}
      variant='primary'
      className='flex w-fit'>
      Block
    </Button>
  </>
}

export default Actions
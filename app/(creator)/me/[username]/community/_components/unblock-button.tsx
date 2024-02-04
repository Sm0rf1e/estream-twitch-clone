'use client'

import { unBlock } from '@/actions/block'
import { Button } from '@/components/ui/button'
import { FC, useTransition } from 'react'

interface UnblockButtonProps {
  userId: string
}

export const UnblockButton: FC<UnblockButtonProps> = ({userId}) => {
  const [isPending, startTransition] = useTransition()

  const onClick = () => {
    startTransition(() => {
      unBlock(userId)
      .catch(() => console.log('Something went wrong'))
    })
  }
  return <Button
    disabled={isPending}
    onClick={onClick}
    variant={'link'}
    size={'sm'}
    className='text-blue-500 w-full'
  >
    Unblock
  </Button>
}

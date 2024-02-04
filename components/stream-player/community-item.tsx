'use client'

import { cn, stringToColor } from '@/lib/utils'
import { cp } from 'fs'
import { FC, useTransition } from 'react'
import Hint from '../hint'
import { Minus } from 'lucide-react'
import { Button } from '../ui/button'
import { onBlock } from '@/actions/block'

interface CommunityItemProps {
  hostName: string
  viewerName: string
  participantName?: string
  participantIdentity: string
}

const CommunityItem: FC<CommunityItemProps> = ({
  hostName, viewerName, participantIdentity, participantName
}) => {
  const [isPending, startTransition] = useTransition()

  const color = stringToColor(participantName || '')
  const isSelf = participantName === viewerName
  const isHost = viewerName === hostName

  const handleBlock = () => {
    if (!participantName || isSelf || isHost)
    
    startTransition(() => {
      onBlock(participantIdentity)
    })
  }

  return <div className={cn(
    'group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5',
    isPending && 'opacity-50 pointer-events-none'
  )}>
    <p style={{color: color}}>
      {participantName}
    </p>
    {isHost && !isSelf && (
      <Hint label='Block'>
        <Button
          disabled={isPending}
          onClick={handleBlock}
          variant={'ghost'}
          className='h-auto w-auto p-1 opacity-0 group-hover:opacity-100 transition'>
          <Minus className='text-muted-foreground hover:text-primary transition'/>
        </Button>
      </Hint>
    )}
  </div>
}

export default CommunityItem
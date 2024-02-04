'use client'

import { stringToColor } from '@/lib/utils'
import { ReceivedChatMessage } from '@livekit/components-react'
import { FC } from 'react'
import {format} from 'date-fns'

interface ChatMessageProps {
  data: ReceivedChatMessage
}

const ChatMessage: FC<ChatMessageProps> = ({data}) => {
  const color = stringToColor(data.from?.name || '')

  return <div className='flex items-center gap-2 p-2 rounded-md hover:bg-white/5'>
    <p className='text-xs'>
      {format(data.timestamp, 'HH:MM')}
    </p>
    <div className='flex flex-wrap items-baseline gap-1 grow'>
      <p className='text-sm font-semibold whitespace-nowrap'>
        <span className='truncate' style={{color: color}}>
          {data.from?.name}:
        </span>
      </p>
      <p className='text-sm break-all'>
        {data.message}
      </p>
    </div>
  </div>
}

export default ChatMessage
'use client'

import { useChatSidebar } from '@/store/use-chat-sidebar'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { FC } from 'react'
import Hint from '../hint'
import { Button } from '../ui/button'
import { useMediaQuery } from 'usehooks-ts'

interface ChatToggleProps {}

const ChatToggle: FC<ChatToggleProps> = ({}) => {
  const {collapsed, onExpand, onCollapse} = useChatSidebar((state) => state)
  const matches = useMediaQuery('(max-width: 1024px)')
  let side: 'right' | 'left' | 'top' | 'bottom'

  if (matches) side = 'right'
  else side = 'left'

  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine

  const onToggle = () => {
    if (collapsed) onExpand()
    else onCollapse()
  }

  const label = collapsed ? "Expand" : 'Collapse'

  return <>
    <Hint label={label} side={side} asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className='h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent'
      >
      <Icon className='h-4 w-4'/>
      </Button>
    </Hint>
  </>
}

export default ChatToggle
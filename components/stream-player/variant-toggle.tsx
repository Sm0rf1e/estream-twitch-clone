'use client'

import { ChatVariant, useChatSidebar } from '@/store/use-chat-sidebar'
import { MessageSquare, Users } from 'lucide-react'
import { FC } from 'react'
import Hint from '../hint'
import { Button } from '../ui/button'
import { useMediaQuery } from 'usehooks-ts'

interface VariantToggleProps {}

const VariantToggle: FC<VariantToggleProps> = ({}) => {
  const {variant, onChangeVariant} = useChatSidebar((state) => state)
  const matches = useMediaQuery('(max-width: 1024px)')
  let side: 'right' | 'left' | 'top' | 'bottom'

  if (matches) side = 'right'
  else side = 'left'

  const isChat = variant === ChatVariant.CHAT

  const Icon = isChat ? Users : MessageSquare

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT
    onChangeVariant(newVariant)
  }

  const label = isChat ? "Community" : 'Chat'

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

export default VariantToggle
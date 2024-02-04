'use client'

import { Maximize, Minimize } from 'lucide-react'
import Hint from '@/components/hint'
import { FC } from 'react'

interface FullscreenControlProps {
  isFullscreen: boolean
  onToggle: () => void
}

const FullscreenControl: FC<FullscreenControlProps> = ({isFullscreen, onToggle}) => {
  const Icon = isFullscreen ? Minimize : Maximize
  const label = isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'

  return <div className='flex items-center justify-center gap-4'>
    <Hint label={label} asChild>
      <button
        onClick={onToggle}
        className='text-white p-1.5 hover:bg-white/10 rounded-lg'
      >
        <Icon className='h-5 w-5'/>
      </button>
    </Hint>
  </div>
}

export default FullscreenControl
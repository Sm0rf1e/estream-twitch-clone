import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'
import { ToggleCardSkeleton } from './_components/toggle-card'

interface Props {}

const ChatLoading: NextPage<Props> = ({}) => {
  return <div className='p-6 space-y-4'>
    <Skeleton className=''/>
    <div className='space-y-4'>
      <ToggleCardSkeleton/>
      <ToggleCardSkeleton/>
      <ToggleCardSkeleton/>
    </div>
  </div>
}

export default ChatLoading
import { StreamPlayerSkeleton } from '@/components/stream-player'
import { FC } from 'react'

interface Props {}

const UserLoading: FC<Props> = ({}) => {
  return <div className='h-full'>
    <StreamPlayerSkeleton/>
  </div>
}

export default UserLoading
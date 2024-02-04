import {StreamPlayer} from '@/components/stream-player'
import { getSelf } from '@/lib/auth-service'
import { getUserByUsername } from '@/lib/user-service'
import { NextPage } from 'next'

interface CreatorPageProps {
  params: {
    username: string
  }
}

const CreatorPage: NextPage<CreatorPageProps> = async ({params}) => {
  const externalUser = await getSelf()
  const user = await getUserByUsername(params.username)

  if (!user || user.externalUserId !== externalUser?.externalUserId || !user.stream) {
    throw new Error('Unauthorized')
  }

  return <div className='h-full'>
    <StreamPlayer
      user={user}
      stream={user.stream}
      isFollowing={true}
    />
  </div>
}

export default CreatorPage
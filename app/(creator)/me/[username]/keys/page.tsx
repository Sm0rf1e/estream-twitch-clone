import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import UrlCard from './_components/url-card'
import { getStreamByUserId } from '@/lib/stream-service'
import { getSelf } from '@/lib/auth-service'
import KeyCard from './_components/key-card'
import ConnectModal from './_components/connect-modal'

interface Props {}

const KeysPage: NextPage<Props> = async ({}) => {
  const self = await getSelf()
  const stream = await getStreamByUserId(self.id)
  const serverUrl = stream ? stream.serverUrl : null
  const streamKey = stream ? stream.streamKey : null

  return <div className='p-6'>
    <div className='flex items-center justify-between mb-4'>
      <h1 className='text-2xl font-bold'>
        Keys & URLs
      </h1>
      <ConnectModal/>
    </div>
    <div className='space-y-4'>
      <UrlCard value={serverUrl}/>
      <KeyCard value={streamKey}/>
    </div>
  </div>
}

export default KeysPage
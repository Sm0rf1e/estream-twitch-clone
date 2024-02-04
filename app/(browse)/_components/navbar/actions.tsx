import { Button } from '@/components/ui/button'
import { getSelf } from '@/lib/auth-service'
import { UserButton } from '@clerk/nextjs'
import { Clapperboard } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

const Actions: FC<Props> = async ({}) => {
  let user
  
  try {
    user = await getSelf()
  } catch (err) {
    user = null
  }

  if (user)
  return <div className='flex gap-x-3 items-center'>
    <Link href={`me/${user.username}`}>
      <Button size={'sm'} variant={'ghost'}
      className='text-muted-foreground hover:text-primary'>
        <Clapperboard className='h-5 w-5 lg:mr-2'/>
        <span className='hidden lg:block'>Dashboard</span>
      </Button>
    </Link>

    <UserButton afterSignOutUrl='/'/>
  </div>
  else
  return <div className='flex gap-x-3 items-center'>
    <Link href={'/sign-in'}>
      <Button size={'sm'} variant={'primary'}>Log in</Button>
    </Link>
  </div>
}

export default Actions
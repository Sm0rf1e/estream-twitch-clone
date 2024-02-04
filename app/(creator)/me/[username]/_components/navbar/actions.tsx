import { Button } from '@/components/ui/button'
import { getSelf } from '@/lib/auth-service'
import { UserButton } from '@clerk/nextjs'
import { Clapperboard, LogOut } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

const Actions: FC<Props> = async ({}) => {
  const user = await getSelf()

  return <div className='flex gap-x-2 items-center justify-end'>
    <Button
      size={'sm'}
      variant={'ghost'}
      className='text-muted-foreground hover:text-primary'
      asChild
    >
      <Link href={'/'}>
        <LogOut className='h-5 w-5 mr-2'/>
        Exit
      </Link>
    </Button>
    <UserButton
      afterSignOutUrl='/'
    />
  </div>
}

export default Actions
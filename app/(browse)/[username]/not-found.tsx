import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

const NotFoundPage: FC<Props> = ({}) => {
  return <div className='h-dull flex flex-col space-y-4 items-center justify-center text-muted-foreground'>
    <h1 className='text-4xl'>404</h1>
    <p>We couldn't find the user you were looking for</p>
    <Button variant={'primary'}>
      <Link href={'/'} className='text-primary'>Go back home</Link>
    </Button>
  </div>
}

export default NotFoundPage
import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

interface Props {}

const Logo: FC<Props> = ({}) => {
  return <>
    <Link href='/'>
      <div className='flex items-center gap-x-4
      hover:opacity-75 transition'>
        <div className='bg-[#131212] rounded-full p-2'>
          <Image
            src='/estream-white.svg'
            alt='Estream'
            height='30'
            width='30'
          />
        </div>
        <div className='hidden lg:block'>
            <p className='text-lg font-semibold'>Estream</p>
            <p className='text-xs text-muted-foreground'>Creator Dashboard</p>
          </div>
      </div>
    </Link>
  </>
}

export default Logo
"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

interface Props {}

const Search: FC<Props> = ({}) => {
  const {push} = useRouter()
  const [value, setValue] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value) return
    push(`/search?term=${value}`)
  }

  return <>
    <form onSubmit={onSubmit}
    className='relative w-full lg:w-[400px] flex items-center'>
      <Input value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Search'
      className='w-full rounded rounded-r-none focus-visible:ring-0
      focus-visible:ring-transparent focus-visible:ring-offset-0
      focus:outline-none'/>
      <Button
       type='submit'
       size='sm'
       variant='secondary'
       className='rounded-l-none'>
        <SearchIcon className='h-5 w-5 text-muted-foreground'/>
      </Button>
    </form>
  </>
}

export default Search
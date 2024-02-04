'use client'

import { FC } from 'react'
import { Skeleton } from '../ui/skeleton'
import ChatToggle from './chat-toggle'
import VariantToggle from './variant-toggle'
import { useMediaQuery } from 'usehooks-ts'


interface Props {}

export const ChatHeader: FC<Props> = ({}) => {
  const matches = useMediaQuery('(max-width: 1024px)')

  return <div className='flex items-center justify-between relative p-3 border-b'>
    {!matches ? <ChatToggle/> : <div className='h-full p-2 w-6'/>}
    <p className='font-semibold text-primary text-center'>
      Stream Chat
    </p>
    <VariantToggle/>
  </div>
}

export const ChatHeaderSkeleton: FC = ({}) => {
  return <>
    <div className='relative p-3 border-b hidden md:block'>
      <Skeleton className='absolute h-6 w-6 left-3 top-3'/>
      <Skeleton className='w-28 h-6 mx-auto'/>
    </div>
  </>
}
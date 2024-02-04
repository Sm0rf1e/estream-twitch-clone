'use client'

import { FC, useState, useTransition, useRef, ElementRef } from 'react'
import { Button } from '../ui/button'
import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
 } from '../ui/dialog'
import { Textarea } from '../ui/textarea'
import { updateUser } from '@/actions/user'

interface BioModalProps {
  initialValue: string | null
}

export const BioModal: FC<BioModalProps> = ({initialValue}) => {
  const closeRef = useRef<ElementRef<'button'>>(null)
  const [value, setValue] = useState(initialValue || '')
  const [isPending, startTransition] = useTransition()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    startTransition(() => {
      updateUser({ bio: value })
      .then(() => closeRef.current?.click())
      .catch(() => console.log('Something went wrong'))
    })
  }

  return <>
    <Dialog>
      <DialogTrigger>
        <Button className='ml-auto' variant={'link'} size={'sm'}>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit user bio
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className='space-y-4'>
          <Textarea
            placeholder='User bio'
            onChange={(e) => setValue(e.target.value)}
            value={value}
            disabled={isPending}
            className='resize-none'
          />
          <div className='flex justify-between'>
            <DialogClose ref={closeRef} type='button'>
              <Button type='button' variant={'ghost'}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={isPending}
              type='submit'
              variant={'primary'}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </>
}

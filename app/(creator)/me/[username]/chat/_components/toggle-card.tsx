"use client"

import { Switch } from '@/components/ui/switch'
import { FC } from 'react'
import { useTransition } from 'react'
import { updateStream } from '@/actions/stream'
import { Skeleton } from '@/components/ui/skeleton'

type FieldTypes = "isChatEnabled" | "isChatDelayed" | 'isChatFollowersOnly'

interface ToggleCardProps {
  field: FieldTypes
  label: string
  value: boolean
}

export const ToggleCard: FC<ToggleCardProps> = ({field, label, value = false}) => {
  const [isPending, startTransition] = useTransition()

  const onChange = () => {
    startTransition(() => {
      updateStream({[field]: !value})
    })
  }

  return <div className='rounded-xl bg-muted p-6'>
    <div className='flex items-center justify-between'>
      <p className='font-semibold shrink-0'>
        {label}
      </p>
      <div className='space-y-2'>
        <Switch
        disabled={isPending}
        onCheckedChange={onChange}
        checked={value}
        >
          {value ? 'On' : 'Off'}
        </Switch>
      </div>
    </div>
  </div>
}

export const ToggleCardSkeleton: FC = () => {
  return <>
    <Skeleton className='rounded-xl p-10 w-full'/>
  </>
}
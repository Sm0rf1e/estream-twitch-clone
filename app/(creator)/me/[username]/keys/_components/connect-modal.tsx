"use client"

import { FC, useState, useTransition, useRef, ElementRef } from 'react'
import { 
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
 } from '@/components/ui/dialog'

 import {
  Alert,
  AlertDescription,
  AlertTitle
 } from '@/components/ui/alert'

 import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
 } from '@/components/ui/select'

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import { IngressInput } from 'livekit-server-sdk'
import { createIngress } from '@/actions/ingress'

const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)

type IngressType = typeof RTMP | typeof WHIP

interface Props {}

const ConnectModal: FC<Props> = ({}) => {
  const [isPending, startTransition] = useTransition()
  const [ingressType, setIngressType] = useState<IngressType>(RTMP)
  const closeRef = useRef<ElementRef<'button'>>(null)

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
      .then(() => {
        closeRef?.current?.click()
      })
    })
  }

  return <Dialog>

    <DialogTrigger asChild>
      <Button variant={'primary'}>
        Generate connection
      </Button>
    </DialogTrigger>
    <DialogContent>

      <DialogHeader>
        <DialogTitle>Generate connection</DialogTitle>
      </DialogHeader>

      <Select
        disabled={isPending}
        value={ingressType}
        onValueChange={(value) => setIngressType(value)}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Ingress Type'/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={RTMP}>RTMP</SelectItem>
          <SelectItem value={WHIP}>WHIP</SelectItem>
        </SelectContent>
      </Select>

      <Alert>
        <AlertTriangle className='h-4 w-4'/>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This action will reset all active streams using the current connection
        </AlertDescription>
      </Alert>

      <div className='flex justify-between'>
        <DialogClose ref={closeRef} asChild>
          <Button variant={'ghost'}>
            Cancel
          </Button>
        </DialogClose>
          <Button
          onClick={onSubmit}
          variant={'ghost'}
          >
          Generate
        </Button>
      </div>

    </DialogContent>
  </Dialog>
}

export default ConnectModal
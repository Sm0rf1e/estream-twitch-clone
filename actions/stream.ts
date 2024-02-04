"use server"

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'
import { Stream } from '@prisma/client'
import { getSelf } from '@/lib/auth-service'
import { getStreamByUserId } from '@/lib/stream-service'

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf()
    const selfStream = await getStreamByUserId(self.id)

    if (!selfStream) {
      throw new Error('Stream not found')
    }

    const validData = {
      name: values.name,
      thumbnailUrl: values.thumbnailUrl,
      isChatEnabled: values.isChatEnabled,
      isChatFollowersOnly: values.isChatFollowersOnly,
      isChatDelayed: values.isChatDelayed
    }

    const stream = await db.stream.update({
      where: {
        id: selfStream.id
      },
      data: {
        ...validData
      }
    })

    revalidatePath(`/me/${self.username}/chat`)
    revalidatePath(`/me/${self.username}`)
    revalidatePath(`/${self.username}`)

    return stream
  } catch (error) {
    throw new Error('Internal Error')
  }
}
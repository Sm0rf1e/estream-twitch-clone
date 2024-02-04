"use server"

import { getSelf } from '@/lib/auth-service'
import { blockUser, unblockUser } from '@/lib/block-service'
import { revalidatePath } from 'next/cache'

export const onBlock = async (id: string) => {
  try {
    const blockedUser = await blockUser(id)

    revalidatePath('/')

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`)
    }

    return blockedUser

  } catch (error) {
    throw new Error(`Internal Error -> ${error}`)
  }
}

export const unBlock = async (id: string) => {
  try {
    const self = await getSelf()
    const unblockedUser = await unblockUser(id)

    revalidatePath(`/u/${self.username}/community`)
    return unblockedUser

  } catch (error) {
    throw new Error(`Internal Error -> ${error}`)
  }
}
import { db } from './db';

export const getStreamByUserId = (userId: string) => {
  const stream = db.stream.findUnique({
    where: {userId}
  })

  if (!stream) {
    throw new Error('Stream not found')
  }

  return stream
}
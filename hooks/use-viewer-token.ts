'use client'

import { createViewerToken } from '@/actions/token'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState('')
  const [name, setName] = useState('')
  const [identity, setIdentity] = useState('')

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity)
        setToken(viewerToken)

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string
        }

        const name = decodedToken?.name
        const identity = decodedToken.jti

        if (identity) setIdentity(identity)
        if (name) setName(name)

      } catch (error) {
        console.log('Something went wrong')
      }
    }

    createToken()
  }, [hostIdentity])

  return {
    token,
    name,
    identity,
  }
}
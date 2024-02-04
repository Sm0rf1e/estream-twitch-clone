import { NextPage } from 'next'
import { SignIn } from '@clerk/nextjs'

interface Props {}

const Signin: NextPage<Props> = ({}) => {
  return <SignIn/>
}

export default Signin
import { NextPage } from 'next'
import { SignUp } from '@clerk/nextjs'

interface Props {}

const Signup: NextPage<Props> = ({}) => {
  return <SignUp/>
}

export default Signup
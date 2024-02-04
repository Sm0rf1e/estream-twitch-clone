import { NextPage } from 'next'
import { Results, ResultsSkeleton } from './_components/results'
import { Suspense } from 'react'

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return <div className='h-full max-w-screen-2xl mx-auto'>
    <Suspense fallback={<ResultsSkeleton/>}>
      <Results/>
    </Suspense>
  </div>
}

export default Home
import type { NextPage } from 'next'
import Brand from '../components/Brand'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <main className="main">
      <Header />
      <Brand />
    </main>
  )
}

export default Home

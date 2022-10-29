import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Brand from '../components/Brand'
import Header from '../components/Header'
import { getWhatsappLink } from './api/links'

type HomeProps = {
  link: string;
}

const Home: NextPage<HomeProps> = ({ link }) => {
  return (
    <>
    <Head>
      <title>Rute Lima - Loiros e Mega-hair</title>
    </Head>
    <main className="main">
      <Header />
      <Brand appointmentHref={link}/>
    </main>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const link = await getWhatsappLink();
  return {
    props : {
      link
    }
  }
}

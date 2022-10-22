import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../components/Button';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import { getLinks, Link as LinkType } from '../api/links';

import styles from './Links.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type LinksPageProps = {
  links: LinkType[];
}

const LinksPage: NextPage<LinksPageProps> = ({ links }) => {
  return (
    <main className="main">
      <Layout>
        <div className={styles.container}>
          <section className={styles.header}>
            <Logo />

            <h1 className={styles.name}>Rute Lima</h1>
            <h2 className={styles.description}>
              Especialista em loiros e mega-hair, te atendo usando as melhores técnicas do mercado.
            </h2>
          </section>

          <section className={styles.linksContainer}>
            {links.map(link => (
              <Link key={link.id} href={link.href} passHref>
                <Button variant="primary" className={styles.link}>
                  <FontAwesomeIcon className="margin-right-lg" icon={link.icon as IconProp} /> 
                  <p className={styles.linkText}>{link.title}</p>
                </Button>
              </Link>
            ))}
          </section>

        </div>
      </Layout>
    </main>
  )
}

export default LinksPage;

export const getServerSideProps: GetServerSideProps = async () =>  {
  const links = await getLinks();

  return {
    props: {
      links
    }
  }
}

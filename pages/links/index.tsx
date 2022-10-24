/* eslint-disable react/display-name */
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../components/Button';
import Layout from '../../components/Layout';
import Logo from '../../components/Logo';
import { getLinks, Link as LinkType } from '../api/links';

import styles from './Links.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type LinksPageProps = {
  links: LinkType[];
}

const linkIcons: {
  [key: string]: IconProp
} = {
  instagram: faInstagram,
  whatsapp: faWhatsapp
}

const LinksPage: NextPage<LinksPageProps> = ({ links }) => {
  return (
    <main className="main">
      <Layout className={styles.layout}>
        <div className={styles.container}>
          <section className={styles.header}>
            <Logo />

            <h1 className={styles.name}>Rute Lima</h1>
            <h2 className={styles.description}>
              💇🏼‍♀️ Especialista em loiros e mega&#8209;hair, te atendo usando as melhores técnicas do mercado.
            </h2>
          </section>

          <section className={styles.linksContainer}>
            {links.map(link => (
              <Link key={link.id} href={link.href} passHref>
                <a style={{ width: '100%'}} target="_blank">
                  <Button variant="primary" className={styles.link}>
                    <FontAwesomeIcon size="2x" className="margin-right-lg" icon={linkIcons[link.icon]} />
                    <p className={styles.linkText}>{link.title}</p>
                  </Button>
                </a>
              </Link>
            ))}
          </section>

        </div>
      </Layout>
    </main>
  )
}

export default LinksPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const links = await getLinks();

  return {
    props: {
      links
    }
  }
}

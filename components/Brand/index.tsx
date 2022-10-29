import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';
import Layout from '../Layout';
import * as R from '../Responsive';

import blondeBrand from '../../public/images/mosaic/brand-image.jpeg';
import blondeOne from '../../public/images/mosaic/blonde-one.jpeg';
import blondeTwo from '../../public/images/mosaic/blonde-two.jpeg';
import blondeThree from '../../public/images/mosaic/blonde-three.jpeg';

import styles from './Brand.module.css';
import Link from 'next/link';

type BrandProps = {
  appointmentHref: string
};

const Brand: React.FC<BrandProps> = ({ appointmentHref }) => {
  return (
    <section>
      <Layout className={styles.brandContainer}>
        <article className={styles.brandTextContainer}>
          <h1 className={styles.brandTitle}>
            Especialista <R.GreaterThanTablet><br /></R.GreaterThanTablet>
            em <span className={styles.specialist}>loiros</span>
            <R.GreaterThanTablet><br /></R.GreaterThanTablet> e <span className={styles.specialist}>mega&#8209;hair</span>
          </h1>
          <h2 className={styles.brandSubtitle}>
            <R.GreaterThanTablet>
              Chega de ter medo de química! Atendimento
              <br />
              personalizado para o seu tipo de cabelo!
            </R.GreaterThanTablet>

            <R.LessThanMobile>
              Chega de ter medo de química! Atendimento
              personalizado para o seu tipo de cabelo!
            </R.LessThanMobile>
          </h2>
          <Link href={appointmentHref} target="_blank">
            <Button className={styles.appointmentButton} variant="primary">Agende seu horário</Button>
          </Link>
        </article>
        <R.LessThanMobile>

        </R.LessThanMobile>

        <R.GreaterThanDesktop>
          <div className={styles.brandImagesContainer}>

            <div className={styles.mosaic}>
              <Image src={blondeBrand} className={styles.mosaicImage}
                alt="A blonde woman showing the hair that she worked on"
              />
              <Image src={blondeTwo} className={styles.mosaicImage}
                alt="A blonde customer woman showing her hair after the styling"
              />
              <Image src={blondeOne} className={styles.mosaicImage}
                alt="A blonde customer woman showing her hair after the styling"
              />
              <Image src={blondeThree} className={styles.mosaicImage}
                alt="A blonde customer woman showing her hair after the styling"
              />
            </div>
          </div>
        </R.GreaterThanDesktop>

      </Layout>
    </section>
  )
}

export default Brand;
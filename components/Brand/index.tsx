import React from 'react';
import { Button } from '../Button';
import Layout from '../Layout';
import * as R from '../Responsive';

import styles from './Brand.module.css';

const Brand: React.FC = () => {
  return (
    <section>
      <Layout className={styles.brandContainer}>
        <div className={styles.brandTextContainer}>
          <h1 className={styles.brandTitle}>
            Especialista <br />
            em <span className={styles.specialist}>Mega Hair</span> <br />e <span className={styles.specialist}>loiros</span> 
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
          <Button className={styles.appointmentButton} variant="primary">Agende seu horário</Button>
        </div>

      </Layout>
    </section>
  )
}

export default Brand;
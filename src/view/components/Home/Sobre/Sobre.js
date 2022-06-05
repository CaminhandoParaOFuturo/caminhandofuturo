import React from 'react';
import styles from './Sobre.module.css';

import CardsSobre from './CardsSobre';
const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <div className={styles.divSobre}>
        <p className={styles.nosSobre}>SOBRE NÓS</p>
        <p className={styles.instSobre}>Conheça a instituição </p>
      </div>
      <div className={styles.divSobreCard}>
        <CardsSobre
          img="/images/002-heart 3.png"
          texto="ajude a instituição"
          cores={styles.CardAjude}
        />
        <CardsSobre
          img="/images/003-building 1.png"
          texto="nossos projetos"
          cores={styles.cardProjetos}
        />
        <CardsSobre
          img="/images/001-user 1.png"
          texto="quem somos"
          cores={styles.cardQuemSomos}
        />
      </div>
    </div>
  );
};

export default Sobre;

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
        <CardsSobre imagem="" texto="Nossos projetos" cores={styles.divSobre} />
        <CardsSobre imagem="" texto="Nossos projetos" cores={styles.divSobre} />
        <CardsSobre imagem="" texto="Nossos projetos" cores={styles.divSobre} />
      </div>
    </div>
  );
};

export default Sobre;

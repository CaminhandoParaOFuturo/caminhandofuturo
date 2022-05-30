import React from 'react';
import styles from './CardsSobre.module.css';

const CardsSobre = (props) => {
  return (
    <>
      <div className={styles.sobreCard}>
        <div className={props.cores}>
          <div className={styles.divImg}>
            <div className={styles.circuloImg}>
              <img src={props.imagem} alt={props.texto} />
            </div>
          </div>
          <footer className={styles.textoPadrao}>
            <p className={styles.textoP}>{props.texto}</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default CardsSobre;

import React from 'react';
import useMedia from '../../../../Hooks/useMedia';
import styles from './CardsSobre.module.css';

const CardsSobre = (props) => {
  const mobile = useMedia('(max-width: 70rem)');
  return (
    <>
      <div className={props.cores}>
        <div>
          <div className={styles.divImg}>
            <div className={styles.circuloImg}>
              <img src={props.img} alt={props.texto} />
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

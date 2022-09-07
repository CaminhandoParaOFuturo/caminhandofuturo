import React from 'react';
import styles from './Sobre.module.css';
import CardsSobre from './CardsSobre';
import { Grid } from '@mui/material';
import Link from 'next/link';
import useMedia from '../../../../Hooks/useMedia';
import SobreNos from '../../SobreNos/SobreNos';

const Sobre = () => {
  const mobile = useMedia('(max-width: 60rem)');

  return (
    <div className={styles.sobre}>
      <div className={mobile ? styles.divSobreMobile : styles.divSobreN}>
        <div className={styles.divSobre}>
          <p className={styles.nosSobre}>SOBRE NÓS</p>
          <p className={styles.instSobre}>Conheça a instituição</p>
        </div>
        <div
          className={`${styles.divSobreCard} ${
            mobile && styles.divSobreCardMob
          }`}
        >
          <Link href="/projects">
            <a>
              <CardsSobre
                img="/images/003-building 1.png"
                texto="nossos projetos"
                cores={styles.CardAjude}
              />
            </a>
          </Link>
          <Link href="#quemSomos">
            <a>
              <CardsSobre
                img="/images/001-user 1.png"
                texto="quem somos"
                cores={styles.cardProjetos}
              />
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <CardsSobre
                img="/images/002-heart 3.png"
                texto="ajude a instituição"
                cores={styles.cardQuemSomos}
              />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.resumeDiv} ${mobile && styles.resumeDivMObile}`}
        id="quemSomos"
      >
        <div className={`${styles.resumeInfos} ${mobile && styles.s}`}>
          <Grid container spacing={1} className={mobile ? styles.Grid : ''}>
            <Grid item>
              <p className={styles.resumeTitle}>
                Desde 1975 atuando na área da infância e juventude
              </p>
              <p className={styles.resumeText}>
                Sociedade Beneficente Caminhando Para o Futuro, inciou suas
                atividades no ano de 1975, no dia 11 de julho. A inciativa
                surgiu de movimentos de moradores de bairro do Jd. Carombé para
                abertura de um núcleo que tivesse a proposta de atender à
                crianças e adolescentes de famílias que residem na região e
                assim à famílias poderiam ficar mais tranquilas, pois seus
                filhos estariam em um local seguro
              </p>
            </Grid>

            <Grid item className={styles.resumeImageParent}>
              <div className={styles.resumeImageBackground1}></div>
              <img
                className={styles.resumeImage}
                src="/images/3criancas.png"
              ></img>
              <div className={styles.resumeImageBackground2}></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

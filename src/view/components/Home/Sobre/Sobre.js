import React from 'react';
import styles from './Sobre.module.css';
import CardsSobre from './CardsSobre';
import { Grid } from '@mui/material';
import Link from 'next/link';
import useMedia from '../../../../Hooks/useMedia';

const Sobre = () => {
  const mobile = useMedia('(max-width: 70rem)');

  return (
    <div className={mobile ? styles.sobreMob : styles.sobre}>
      <div className={mobile ? styles.divSobreMobile : styles.divSobreN}>
        <div className={styles.divSobre}>
          <p className={styles.nosSobre}>SOBRE NÓS</p>
          <p className={styles.instSobre}>Conheça a instituição</p>
        </div>
        <div className={mobile ? styles.divSobreCardMob : styles.divSobreCard}>
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
              <p
                className={mobile ? styles.resumeTitleMob : styles.resumeTitle}
              >
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
              <div
                className={
                  mobile
                    ? styles.resumeImageBackground1Mob
                    : styles.resumeImageBackground1
                }
              ></div>
              <img
                className={mobile ? styles.resumeImageMob : styles.resumeImage}
                src="/images/3criancas.png"
              ></img>
              <div
                className={
                  mobile
                    ? styles.resumeImageBackground2Mob
                    : styles.resumeImageBackground2
                }
              ></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

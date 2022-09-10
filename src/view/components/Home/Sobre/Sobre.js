import React from 'react';
import styles from './Sobre.module.css';
import CardsSobre from './CardsSobre';
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
      <div className={mobile ? styles.containerMob : styles.container}>
        <div
          className={mobile ? styles.containerTextoMob : styles.containerTexto}
        >
          <p className={mobile ? styles.textoCabeMob : styles.textoCabe}>
            Desde 1975 atuando na área da infância e juventude
          </p>
          <p className={mobile ? styles.resumeTextMob : styles.resumeText}>
            Sociedade Beneficente Caminhando Para o Futuro, inciou suas
            atividades no ano de 1975, no dia 11 de julho. A inciativa surgiu de
            movimentos de moradores de bairro do Jd. Carombé para abertura de um
            núcleo que tivesse a proposta de atender à crianças e adolescentes
            de famílias que residem na região e assim à famílias poderiam ficar
            mais tranquilas, pois seus filhos estariam em um local seguro.
          </p>
        </div>
        <div className={styles.containerImagem}>
          <div className={styles.imagem3}>
            <div className={styles.imagem2}>
              <img
                className={mobile ? styles.resumeImage : styles.resumeImage}
                src="/images/3criancas.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

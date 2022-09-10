import React from 'react';
import BtnScrollHeader from '../BtnScrollHeader/BtnScrollHeader';
import Link from 'next/link'
import styles from './Footer.module.css';
import useMedia from '../../../../Hooks/useMedia';


const Footer = () => {
  const mobile = useMedia('(max-width: 60rem)')
  return (
    <>
        <div className={mobile ? styles.containerFooterMob :styles.containerFooter }>
            <div className={mobile ?styles.SubdivMob: styles.Subdiv}>
              <img src='/images/provida.png' alt="" />
              <img src='/images/bb.png' alt="" />
              <img src='/images/sabesp.png' alt="" />
              <img src='/images/fundoSocial.png' alt="" />
              <img src='/images/adoteSorriso.png' alt="" />
              <img src='/images/fundacao.png' alt="" />
            </div>
             <div className={mobile ?styles.divConteudoMob: styles.divConteudo}>
                <div> 
                  <img src='/images/Artboard 1 1.png' alt="" />
                </div>
                <div className={mobile ?styles.conatinerDivTextoMob: styles.conatinerDivTexto}>
                <div className={styles.botao}> 
                  <Link href="/Ajude">
                      <a>Faça sua doação</a>
                  </Link></div>
                <p className={styles.paragrafo}>Av. Dep. Emílio Carlos, 2224 - Limão, São Paulo - SP</p>
                <img src="/images/instagram.png" alt=""  />
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;

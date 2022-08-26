import React from 'react';
import BtnScrollHeader from '../BtnScrollHeader/BtnScrollHeader';
import Link from 'next/link'
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <>
    <div className={styles.header}>
      {/* <div className={styles.divMenu}>
        <img src={'/images/Artboard 1 1.png'} alt="logo" />
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Nossos Projetos</a>
              </Link>
            </li>
            <li>
              <Link href="/nucleus">
                <a>Nossos Nucleos</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}

      {/* <div className={styles.divTextosContainer}>
        <div className={styles.divTextos}>
          <div className={styles.divTextoP}>
            <p>Transformando através da educação</p>
          </div>
          <div className={styles.botao}>
            <h1>faça sua doação</h1>
          </div>
        </div>
       <BtnScrollHeader/>
      </div> */}
    </div>

    </>
  );
};

export default Footer;

import React from 'react';
import styles from './Header.module.css';
import BtnScroll from '../BtnScroll/BtnScroll';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.divMenu}>
        <img src='../imgs/Artboard 1 1.png' alt="logo" />
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>Sobre Nós</li>
            <li>Ajude</li>
            <li>Parceiros</li>
            <li>Contatos</li>
          </ul>
        </div>
      </div>

      <div className={styles.divTextosContainer}>
        <div className={styles.divTextos}>
          <div className={styles.divTextoP}>
            <p>Transformando através da educação</p>
          </div>
          <div className={styles.botao}>
            <h1>faça sua doação</h1>
          </div>
        </div>
        <BtnScroll />
      </div>
    </div>
  );
};

export default Header;

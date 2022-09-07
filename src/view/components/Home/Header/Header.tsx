import React from 'react';
import Link from 'next/link'
import styles from './Header.module.css';
import useMedia from '../../../../Hooks/useMedia';


const Header = () => {

  const mobile = useMedia('(max-width: 60rem)');
  const [ativo, setAtivo] = React.useState(false);
  const ToogleMode = () => {
    setAtivo(!ativo);
  };

  return (
    <>
    <div className={styles.header}>
      <div className={styles.divMenu}>
        <img src={'/images/Artboard 1 1.png'} alt="logo" className={styles.imgMobile} />
          <div className={ styles.menu}>
            <ul >
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
            <li>
                <Link href="/Ajude">
                      <a>Ajude</a>
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Header;

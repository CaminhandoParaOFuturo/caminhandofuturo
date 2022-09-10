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
    <div className={mobile ? styles.headerMob : styles.header}>

        <div className={mobile ? styles.divImgMob :styles.divImg }>
           <img src={'/images/Artboard 1 1.png'} alt="logo" className={mobile ? styles.imgMobile:styles.imgNor} />
           <p>Transformando através da educação</p>
           <div className={styles.botaoDiv}>
            faça sua doação
           </div>
        </div>
       
          <div className={ mobile ?styles.menuMob  : styles.menu}>
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
    </>
  );
};

export default Header;

import React from 'react';
import SobreNos from '../../SobreNos/SobreNos';
import Header from '../Header/Header';
import Sobre from '../Sobre/Sobre';
import styles from './container.module.css';

const Container = () => {
  let classe = styles.container;
  return (
    <div className={styles.container}>
 <SobreNos/>
    </div>
  );
};

export default Container;

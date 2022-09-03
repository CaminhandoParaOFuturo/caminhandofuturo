import React from 'react'
import styles from './SobreNos.module.css';

const TextoCorpo = (props) => {
  return (
    <>
        <p className={styles.texto}>{props.textoP}  </p>
    </>
  )
}

export default TextoCorpo
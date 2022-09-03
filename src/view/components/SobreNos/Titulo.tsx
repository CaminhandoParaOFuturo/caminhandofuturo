import React from 'react'
import styles from './SobreNos.module.css';

const Titulo = (props) => {
  return (
    <div className={styles.divTitulo}>
          <h2 className={styles.titulo} >{props.texto}</h2>
        </div>
  )
}

export default Titulo
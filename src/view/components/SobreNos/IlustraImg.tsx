import React from 'react'
import styles from './SobreNos.module.css';

const IlustraImg = (props) => {
  return (
    <div className={styles.containerTexto2}> 
    <img className={styles.imgsColor} src={props.imagem} alt={props.alt} />
    </div>
  )
}

export default IlustraImg
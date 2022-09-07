import React from 'react'
import styles from './Textopix.module.css';
const Textopix = (props) => {
  return (
    <div className={styles.containerTexto}><div className={styles.numero}>{props.numero}</div><p className={styles.Texto}>{props.texto} :  <strong> <a href={props.link}>{props.link}</a></strong></p><strong>{props.str}</strong></div>
    
  )
}

export default Textopix
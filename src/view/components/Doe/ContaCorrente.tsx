import React from 'react'
import styles from './ContaCorrente.module.css';

const ContaCorrente = () => {
  return (
    <div className={styles.ContainerCC}>
      <img src="/images/banco.png" alt="logo banco" />
      <div className={styles.DivConta}>
        <strong>Agencia: </strong> <p> 2221-7</p>

        <strong>C/Corrente: </strong> <p> 005764-9</p> 
      </div>
      
    </div>
  )
}

export default ContaCorrente
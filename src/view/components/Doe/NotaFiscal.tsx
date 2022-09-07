import React from 'react'
import styles from './NotaFiscal.module.css';
import Textopix from './Textopix';

export const NotaFiscal = () => {
  return (
    <div className={styles.ContainerNota}>
      <div className={styles.cabe}>
        <h1>Nota Fiscal paulista</h1>
        <p>Voçê pode fazer sua doação automaticamnete e bem rapidinho !</p>
      </div>
      <div className={styles.passos}>
        <Textopix texto ='Para isso entre no site' numero='1'link='nfp.fazenda.sp.gov.br'/>
        <Textopix texto ='Faça o login e selecione entidades doação de cupons com CPF' str='(Automático)'numero='2'/>
        <Textopix texto=' Escolha a Sociedade Beneficente Caminhando para o Futuro CNPJ: 'numero='3'str="47.389.788/0003-03"/>
      </div>
  
    </div>
  )
}

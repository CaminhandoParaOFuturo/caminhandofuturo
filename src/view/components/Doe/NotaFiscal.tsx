import React from 'react'
import useMedia from '../../../Hooks/useMedia';
import styles from './NotaFiscal.module.css';
import Textopix from './Textopix';

export const NotaFiscal = () => {
  
  const mobile = useMedia('(max-width: 60rem)');
  return (
    <div className={mobile ?styles.ContainerNotaMobile: styles.ContainerNota}>
      <div className={styles.divContent}> 
      <div>
         <img src='/images/nota.png' alt="nota fiscal paulista" />
      </div>
         <div className={styles.passos}>
          <Textopix texto ='Para isso entre no site' numero='1'link='https://portal.fazenda.sp.gov.br/servicos/nfp'/>
          <Textopix texto ='Faça o login e selecione entidades doação de cupons com CPF' str='(Automático)'numero='2'/>
          <Textopix texto=' Escolha a Sociedade Beneficente Caminhando para o Futuro CNPJ: 'numero='3'str="47.389.788/0003-03"/>
        </div>
      </div>
     
  
    </div>
  )
}

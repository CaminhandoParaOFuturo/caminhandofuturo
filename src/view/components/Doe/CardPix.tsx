import React, { useRef, useState } from 'react'
import useMedia from '../../../Hooks/useMedia';
import styles from './CardPix.module.css';
import ContaCorrente from './ContaCorrente';
import { NotaFiscal } from './NotaFiscal';
import Textopix from './Textopix';

const CardPix = () => {
  const iputPix = useRef(null);
  const mobile = useMedia('(max-width: 60rem)');

  return (
    <div className={ mobile ?styles.cardPixMobile : styles.cardPix }>
          
        <div className={styles.cardPixTexto}>
          <div className={styles.Topicos}>
            <Textopix texto ="Copie a chave PIX" numero='1'/>
            <Textopix texto ="Abra o aplicativo do seu banco e escolha a opção PIX Copia e Cola" numero='2'/>
            <Textopix texto ="Confirma os dados da Caminhando para o Futuro e pronto" numero='3'/>
          </div>
                     
           <input type="text" ref={iputPix} className={styles.input} value="00020126360014BR.GOV.BCB.PIX0114473897880001335204000053039865802BR5924Caminhando Para o Futuro6009Sao Paulo62070503***6304A7AD" />
        </div>
        <div className={styles.cardI}>
        <strong>Ou</strong>
        <div className={styles.Scaneie}> 
        <p> Escaneie este código</p>
          <img src="/images/qrcode-pix.png" alt="qr code pix" />
        </div>
        </div> 
        <div className={styles.Subcontainer}>  
          <ContaCorrente/>
          <NotaFiscal/>
        </div> 
       
    </div>
  )
}

export default CardPix
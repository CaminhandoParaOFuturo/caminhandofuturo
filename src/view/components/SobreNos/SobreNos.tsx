import React from 'react'
import styles from './SobreNos.module.css';
import imgEscola from'/'


const SobreNos = () => {
  return (
  <div className={styles.container}>
    <div className={styles.containerTexto}>
        <div className={styles.divTitulo}>
          <h2 className={styles.titulo} >Conheça mais sobre a longa história da Caminhando para o Futuro</h2>
        </div>
        <div className={styles.divTexto}>
            <p className={styles.texto}>Sociedade Beneficente Caminhando Para o Futuro, iniciou suas atividades no ano de 1975, no dia 11 de julho. A iniciativa surgiu de movimentos de moradores do bairro do Jd. Carombé para abertura de um núcleo que tivesse a proposta de atender às crianças e adolescentes de famílias que residem na região e assim às famílias poderiam ficar mais tranquilas, pois seus filhos estariam em um local seguro. A organização aumentou consideravelmente o número de crianças atendidas com a abertura de vários outros núcleos.
            A  Caminhando para o Futuro possui reconhecimento de utilidade pública federal, assim como municipal, <b>CEBAS,</b> <b>CMDCA,</b><b>COMAS,</b><b>CENTS, </b>    matrícula em <b>SMADS, </b> e na <b>Secretaria da Educação</b> </p>
        </div>
    </div>
    <div className={styles.containerTexto2}> 
    <img className={styles.imgsColor} src='/images/school-classroom-with-books-backpack 1.png' alt="" />
    </div>
  </div>
  )
}

export default SobreNos
import { Email, FacebookRounded, Phone, Place } from "@mui/icons-material"
import { NextPage } from "next"
import styles from "./style.module.css"
import { Nucleus } from "../../../model/interfaces/Nucleus"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Markup } from 'interweave'
import { polyfill } from 'interweave-ssr'

export const NucleusComponent: NextPage<{nucleus: Nucleus}> = (props) => {
  polyfill()
  const nucleus = props.nucleus

  return (
    <Card>
      <CardMedia
        component="img"
        height="230"
        image="/images/cei-brincando_tambem_se_aprende.png"
        alt={`Imagem da faixada do núcleo ${nucleus.title}`}
      />
      <CardContent className={nucleus.ofProject == "CEI" ? styles.cardCEI : styles.cardCCA}>
        <Typography gutterBottom variant="h6" component="div" className={nucleus.ofProject == "CEI" ? styles.titleCEI : styles.titleCCA}>
          {nucleus.title}
        </Typography>

        <Markup content={nucleus.description}></Markup><br/>

        <div className={nucleus.ofProject == "CEI" ? styles.infosCEI : styles.infosCCA}>
          <p><a target="_blank" href={nucleus.mapsLink}><Place fontSize="inherit"></Place> {nucleus.address}</a></p>
          <p><Phone fontSize="inherit"></Phone> {nucleus.phone}</p>
          <p><span className={styles.nobr}><Email fontSize="inherit"></Email>&nbsp;</span>{nucleus.email}</p>
          <p><FacebookRounded fontSize="inherit"></FacebookRounded> <a target="_blank" href={nucleus.facebook}>Facebook</a></p>
        </div>
      </CardContent>
    </Card>
    // <div className={styles.card}>
    //   {/* <Image
    //     src="/images/cei-brincando_tambem_se_aprende.png"
    //     height={}>
    //   </Image> */}
    //   <img
    //     src="/images/cei-brincando_tambem_se_aprende.png"
    //     className="img-thumbnail"
    //     alt={`Imagem da faixada do núcleo ${nucleus.title}`}>
    //   </img>
    //   <h4 className={styles.title}>{nucleus.title}</h4>

    //   <p>{nucleus.description}</p>

    //   <a target="_blank" href={nucleus.mapsLink}><Place fontSize="inherit"></Place> {nucleus.address}</a><br/>
    //   <text><Email fontSize="inherit"></Email> {nucleus.email}</text><br/>
    //   <text><Phone fontSize="inherit"></Phone> {nucleus.phone}</text>

    //   <p><FacebookRounded fontSize="inherit"></FacebookRounded> <a target="_blank" href={nucleus.facebook}>Facebook</a></p>
    // </div>
  )
}


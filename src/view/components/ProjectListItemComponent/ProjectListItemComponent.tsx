import { Email, FacebookRounded, Phone, Place } from "@mui/icons-material"
import { NextPage } from "next"
import styles from "./style.module.css"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Markup } from 'interweave'
import { Project } from "../../../model/interfaces/Project"

export const ProjectListItemComponent: NextPage<{project: Project}> = (props) => {
  const project = props.project

  return (
    <Card>
      <CardMedia
        component="img"
        height="230"
        image={`/images/${project.image}`}
        alt={`Imagem do projeto ${project.name}`}
      />
      <CardContent className={project.id == "CEI" ? styles.cardCEI : styles.cardCCA}>
        <Typography gutterBottom variant="h6" component="div" className={project.id == "CEI" ? styles.titleCEI : styles.titleCCA}>
          {project.name}
        </Typography>

        <p>
          <b className={project.id == "CEI" ? styles.infosCEI : styles.infosCCA}>
            Público Alvo:&nbsp;
          </b> 
          {project.targetAudience}
        </p>

        <Markup content={project.description}></Markup>
      </CardContent>
    </Card>
  )
}


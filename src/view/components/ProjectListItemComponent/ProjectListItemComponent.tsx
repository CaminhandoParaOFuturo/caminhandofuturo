import { Email, FacebookRounded, Phone, Place } from "@mui/icons-material"
import { NextPage } from "next"
import styles from "./style.module.css"
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Markup } from 'interweave'
import { Project } from "../../../model/interfaces/Project"

export const ProjectListItemComponent: NextPage<{project: Project}> = (props) => {
  const project = props.project

  return (
    <Card
      sx={{ boxShadow: 0 }}
    >
      <CardMedia
        component="img"
        height="350"
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

        {/* <Grid container spacing={2}
          columns={1}>
          <Grid item xs={1} key="content">
            <Markup
              content={project.description}
            ></Markup>
          </Grid>
          <Grid item xs={1} key="space">
          </Grid>
          <Grid item xs={1} key="button">
            <Button
              variant="contained"
              className={project.id == "CEI" ? styles.buttonCEI : styles.buttonCCA}
            >
              ver unidades
            </Button>
          </Grid>
        </Grid> */}

        <Markup
          content={project.description}
        ></Markup>

        <Button
          variant="contained"
          className={project.id == "CEI" ? styles.buttonCEI : styles.buttonCCA}
        >
          ver unidades
        </Button>
      </CardContent>
    </Card>
  )
}


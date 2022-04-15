import { NextPage } from "next"
import { Project } from "../../../model/interfaces/Project"
import { Box, Container, Grid } from "@mui/material"
import styles from "../../../../styles/Nucleus.module.css"
import { Email, FacebookRounded, Phone, Place } from "@mui/icons-material";

const Nucleus: NextPage<{projectList: Project[]}> = (props) => {
  const projectList = props.projectList

  const projList = projectList.map(project => {
    if(project.nucleusList != undefined && project.nucleusList.length != 0)
      return (
        <Box sx={{ flexGrow: 1 }} key={project.id}>
          <h1 className={styles.title}>{project.name}</h1>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
            {project.nucleusList.map(nucleus =>
              <Grid item xs={1} sm={1} md={1} key={nucleus.title}>
                <div className={styles.card}>
                  <h4 className={styles.subtitle}>{nucleus.title}</h4>

                  <p>{nucleus.description}</p>

                  <a target="_blank" href={nucleus.mapsLink}><Place fontSize="inherit"></Place> {nucleus.address}</a><br/>
                  <text><Email fontSize="inherit"></Email> {nucleus.email}</text><br/>
                  <text><Phone fontSize="inherit"></Phone> {nucleus.phone}</text>

                  <p><FacebookRounded fontSize="inherit"></FacebookRounded> <a target="_blank" href={nucleus.facebook}>Facebook</a></p>
                </div>
              </Grid>
            )}
          </Grid>
        </Box>
      )
    else
      return null
  })

  return (
    <Container maxWidth="xl">
      {projList}
    </Container>
  )
}

export default Nucleus
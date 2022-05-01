import { NextPage } from "next"
import { Project } from "../../../model/interfaces/Project"
import { Box, Container, Grid } from "@mui/material"
import styles from "../../../../styles/Nucleus.module.css"
import { Email, FacebookRounded, Phone, Place } from "@mui/icons-material";
import { NucleusComponent } from "../../components/NucleusComponent/NucleusComponent";

const Nucleus: NextPage<{projectList: Project[]}> = (props) => {
  const projectList = props.projectList

  const projList = projectList.map(project => {
    if(project.nucleusList != undefined && project.nucleusList.length != 0)
      return (
        <Box sx={{ flexGrow: 1 }} key={project.id}>
          <h1 className={styles.title}>{project.name}</h1>
          <Grid container spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
            {project.nucleusList.map(nucleus =>
              <Grid item xs={1} key={nucleus.title}>
                  <NucleusComponent nucleus={nucleus}></NucleusComponent>
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
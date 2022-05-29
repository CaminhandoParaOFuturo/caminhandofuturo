import { NextPage } from "next"
import { Project } from "../../../model/interfaces/Project"
import { Box, Container, Grid } from "@mui/material"
import styles from "../../../../styles/Nucleus.module.css"
import { ProjectListItemComponent } from "../../components/ProjectListItemComponent/ProjectListItemComponent"

const ProjectList: NextPage<{projectList: Project[]}> = (props) => {
  const projectList = props.projectList

  const projList = projectList.map(project => {
    return (
      <Grid item xs={1} key={project.name}>
        <ProjectListItemComponent project={project}></ProjectListItemComponent>
      </Grid>
    )
  })

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}
          columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
          {projList}
        </Grid>
      </Box>
    </Container>
  )
}

export default ProjectList
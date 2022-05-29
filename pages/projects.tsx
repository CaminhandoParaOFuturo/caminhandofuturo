import { Project as ProjectViewModel } from "../src/view-model/Project"
import ProjectList from "../src/view/features/ProjectList/ProjectList"

export async function getServerSideProps(context: any) {
    const projectsViewModel = new ProjectViewModel()

    const projectList = await projectsViewModel.getAll()

    return {
      props: { projectList }
    }
  }
export default ProjectList
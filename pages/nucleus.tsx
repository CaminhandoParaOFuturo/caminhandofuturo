import NucleusList from "../src/view/features/NucleusList/NucleusList"
import { Nucleus as NucleusViewModel } from "../src/view-model/Nucleus"
import { Project as ProjectViewModel } from "../src/view-model/Project"

export async function getServerSideProps(context: any) {
    const nucleusViewModel = new NucleusViewModel()
    const projectsViewModel = new ProjectViewModel()

    const nucleusList = await nucleusViewModel.getAll()
    const projectList = await projectsViewModel.getAll()

    projectList.forEach(project => {
      const nList = nucleusList.filter(nucleus => nucleus.ofProject == project.id)

      if(nList.length == 0)
        process.emitWarning("Nucleus list is empty")

      project.nucleusList = nList
    })

    return {
      props: { projectList }
    }
  }
export default NucleusList
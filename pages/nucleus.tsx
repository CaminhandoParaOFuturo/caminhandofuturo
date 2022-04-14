import Nucleus from "../src/view/pages/Nucleus"
import { Nucleus as NucleusViewModel } from "../src/view-model/Nucleus"
import { Nucleus as NucleusInterface } from "../src/model/interfaces/Nucleus"

export async function getServerSideProps(context: any) {
    const nucleusViewModel = new NucleusViewModel()
    
    const nucleusList = await nucleusViewModel.getAll()
    return {
      props: { nucleusList }
    }
  }
export default Nucleus
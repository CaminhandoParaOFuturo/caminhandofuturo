import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { Nucleus as NucleusViewModel } from "../../view-model/Nucleus"
import { Nucleus as NucleusInterface } from "../../model/interfaces/Nucleus"

const Nucleus: NextPage<{nucleusList: NucleusInterface[]}> = (props) => {
  const nucleusList = props.nucleusList
  console.log(nucleusList)

  return (
    <>
      {nucleusList.map(nucleus =>
        <div key={nucleus.title}>
          <h4>{nucleus.description}</h4>
          <p>{nucleus.address}</p>
          <p>{nucleus.email}</p>
          <p>{nucleus.phone}</p>
          <p>{nucleus.facebook}</p>
          <p>{nucleus.ofProject}</p>
        </div>
      )}
    </>
  )
}

export default Nucleus
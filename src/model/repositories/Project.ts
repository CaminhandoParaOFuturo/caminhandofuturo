import { Project as ProjectInterface } from "../interfaces/Project"

export class Project {
    private api_url!: string
    private endpoint_url!: string
    private endpoint = 'project'

    constructor() {
        if(!process.env.API_URL)
            throw `Environment API_URL not set`
        
        this.api_url = process.env.API_URL
        this.endpoint_url = this.api_url + this.endpoint
    }
    
    async getAll(): Promise<ProjectInterface[]> {
        return projectList
    }
}

let projectList: ProjectInterface[] = [
    {
        id: "CEI",
        name: "CENTRO DE EDUCAÇÃO INFANTIL",
        description: "Promovem o desenvolvimento de saberes de acordo com cada faixa etária. Através de atividades educativas amparadas em projetos pedagógicos, o aprendizado ocorre por meio de brincadeiras e vivências lúdicas. Oferecem atividades de educação e desenvolvimento pedagógico, cinco refeições completas e planejadas por nutricionistas, e o cuidado constante com a saúde e higiene.",
        targetAudience: "0 a 4 anos",
        image: "CEI.png"
    },
    {
        id: "CCA",
        name: "CENTRO DE CRIANÇA E ADOLESCENTE",
        description: "Com objetivo de criar uma proteção integral à criança e adolescente que possa estar em situação de risco ou vulnerabilidade social. Através de atividades transdisciplinares incita o desenvolvimento intelectual ao mesmo tempo em que cria um ambiente de socialização.",
        targetAudience: "6 a 14 anos",
        image: "CCA.png"
    }
]

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
        description: "Um espaço coletivo privilegiado de vivência da infância, que visa contribuir na construção da identidade social e cultural dos bebê e das crianças, fortalecendo o trabalho integrado do cuidar e do educar, numa ação complementar à da família e da comunidade, objetivando proporcionar condições adequadas para promover educação, proteção, segurança, alimentação, cultura, saúde e lazer, com vistas à inserção, prevenção, promoção e proteção à infância”, atende os princípios estabelecidos nas Diretrizes Curriculares Nacionais para a Educação Infantil.",
        targetAudience: "0 a 4 anos",
        image: "CEI.png"
    },
    {
        id: "CCA",
        name: "CENTRO DE CRIANÇA E ADOLESCENTE",
        description: "Desenvolvemos atividades com crianças e adolescentes, tendo por foco a constituição de espaço de convivência a partir dos interesses, demandas e potencialidades. As intervenções devem ser pautadas em experiências lúdicas, culturais e esportivas como formas de expressão, interação, aprendizagem, sociabilidade e proteção social. Atendemos crianças e adolescentes em situação de risco e vulnerabilidade pessoal e social, priorizando famílias de baixa renda. Proporcionamos experiências favorecedoras no desenvolvimento de sociabilidades e prevenção de situações de risco social, como preconiza o Plano Nacional de Assistência Social.",
        targetAudience: "6 a 14 anos",
        image: "CCA.png"
    }
]

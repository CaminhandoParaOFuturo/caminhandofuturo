import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../src/model/interfaces/Project";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project[] | null>
) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(projectList)
            break;
    
        default:
            res.status(404).send(null)
            break;
    }
}

let projectList: Project[] = [
    {
        id: "CEI",
        name: "CENTRO DE EDUCAÇÃO INFANTIL"
    },
    {
        id: "CCA",
        name: "CENTRO DE CRIANÇA E ADOLESCENTE"   
    }
]

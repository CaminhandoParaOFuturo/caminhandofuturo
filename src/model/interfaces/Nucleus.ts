import { Project } from "./Project"

export interface Nucleus {
    title: string
    description: string
    address: string
    email: string
    phone: string
    facebook: string
    ofProject: Project["id"]
    mapsLink: string
}
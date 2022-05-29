import { Nucleus } from "./Nucleus"

export interface Project {
    id: string
    name: string
    description: string
    nucleusList?: Nucleus[]
    targetAudience: string
    image: string
}
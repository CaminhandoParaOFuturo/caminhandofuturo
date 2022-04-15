import { Nucleus } from "./Nucleus"

export interface Project {
    id: string
    name: string
    nucleusList?: Nucleus[]
}
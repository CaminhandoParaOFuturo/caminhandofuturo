import { Project as ProjectInterface } from "../interfaces/Project"

export class Project {
    private api_url!: string
    private endpoint_url!: string
    private endpoint = 'project'

    constructor() {
        if(process.env.API_URL === undefined)
            throw `Environment API_URL not set`
        
        this.api_url = process.env.API_URL
        this.endpoint_url = this.api_url + this.endpoint
    }
    
    async getAll(): Promise<ProjectInterface[]> {
        return (await fetch(this.endpoint_url)).json()
    }
}
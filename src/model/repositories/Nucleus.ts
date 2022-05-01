import { Nucleus as NucleusInterface } from "../interfaces/Nucleus"

export class Nucleus {
    private api_url!: string
    private endpoint_url!: string
    private endpoint = 'nucleus'

    constructor() {
        if(!process.env.API_URL)
            throw `Environment API_URL not set`
        
        this.api_url = process.env.API_URL
        this.endpoint_url = this.api_url + this.endpoint
    }

    async getAll(): Promise<NucleusInterface[]> {
        return await (await fetch(this.endpoint_url)).json()
    }
}
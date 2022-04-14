import { Nucleus as NucleusInterface } from "../interfaces/Nucleus"

export class Nucleus {

    async getAll(): Promise<NucleusInterface[]> {
        return await fetch("http://localhost:3000/api/nucleus")
            .then(res => res.json())
    }
}
import { Project } from "../model/interfaces/Project"
import { Nucleus as NucleusRepository } from "../model/repositories/Nucleus"

export class Nucleus {
    private nucleusRepository = new NucleusRepository()

    async getAll() {
        return await this.nucleusRepository.getAll()
    }
}
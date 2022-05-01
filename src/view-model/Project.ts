import { Project as ProjectRepository } from "../model/repositories/Project"
import { Project as ProjectInterface } from "../model/interfaces/Project"

export class Project {
    private projectRepository = new ProjectRepository()

    async getAll() {
        return await this.projectRepository.getAll()
    }
}
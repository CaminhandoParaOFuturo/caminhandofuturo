import { Project as ProjectRepository } from "../model/repositories/Project"

export class Project {
    private projectRepository = new ProjectRepository()

    async getAll() {
        return await this.projectRepository.getAll()
    }
}
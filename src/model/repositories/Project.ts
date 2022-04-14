export class Project {
    
    async getAll() {
        return fetch("/api/project")
    }
}
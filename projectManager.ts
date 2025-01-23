import { Project } from './project';

export class ProjectManager {
    private projects: Project[] = [];

    // Aggiungi un progetto
    addProject(project: Project): void {
        if (this.projects.some(existingProject => existingProject.id === project.id)) {
            throw new Error(`Il progetto con id ${project.id} esiste già.`);
        }
        this.projects.push(project);
    }

    // Rimuovi un progetto
    removeProject(projectId: number): void {
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        if (projectIndex === -1) {
            throw new Error(`Il progetto con id ${projectId} non esiste.`);
        }
        this.projects.splice(projectIndex, 1);
    }

    //Filtra i progetti per team
    filterTeamProjects(team: string): Project[] {
        return this.projects.filter(project => project.team === team);
    }
}

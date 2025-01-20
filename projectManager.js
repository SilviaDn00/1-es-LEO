"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectManager = void 0;
class ProjectManager {
    constructor() {
        this.projects = [];
    }
    // Aggiungi un progetto
    addProject(project) {
        if (this.projects.some(existingProject => existingProject.id === project.id)) {
            throw new Error(`Il progetto con id ${project.id} esiste già.`);
        }
        this.projects.push(project);
    }
    // Rimuovi un progetto
    removeProject(projectId) {
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        if (projectIndex === -1) {
            throw new Error(`Il progetto con id ${projectId} non esiste.`);
        }
        this.projects.splice(projectIndex, 1);
    }
    //Filtra i progetti per team
    progettiPerTeam(team) {
        return this.projects.filter(project => project.team === team);
    }
}
exports.ProjectManager = ProjectManager;

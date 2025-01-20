"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(id, description, team, startDate, endDate) {
        this.id = id;
        this.description = description;
        this.team = team;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectTasks = []; //array che contiene oggetti di tipo task
    }
    //aggiunge un task al progetto
    addTask(task) {
        // Verifica se il task esiste già nel progetto
        if (this.projectTasks.some(t => t.id === task.id)) { //Questo metodo itera attraverso tutti gli elementi nell'array this.projectTasks (che contiene gli oggetti di tipo Task).
            throw new Error(`Il task con id ${task.id} esiste già nel progetto.`); //existingTask è il nome della variabile che rappresenta ciascun singolo elemento dell'array this.projectTasks
        }
        this.projectTasks.push(task);
    }
    // Modifica lo stato di un task
    updateTaskStatus(taskId, newStatus) {
        const task = this.projectTasks.find(t => t.id === taskId); //find restituisce il primo elemento che soddisfa la condizione
        if (!task) { // Se task è undefined (non trovato), entra in questo blocco
            throw new Error(`Il task con id ${taskId} non esiste nel progetto.`);
        }
        task.status = newStatus;
    }
    //Filtra i task ad alta priorità
    taskAdAltaPriorita() {
        return this.projectTasks.filter(task => task.priority === 'ALTA');
    }
}
exports.Project = Project;

import { statusTask, Task } from "./task";

export class Project {
    public projectTasks: Task[] = [];  //array che contiene oggetti di tipo task

    constructor
        (
            public id: number,
            public description: string,
            public team: string,
            public startDate: Date,
            public endDate: Date,
        ) { }


    //aggiunge un task al progetto
    addTask(task: Task): void {
        // Verifica se il task esiste già nel progetto
        if (this.projectTasks.some(t => t.id === task.id)) {    //Questo metodo itera attraverso tutti gli elementi nell'array this.projectTasks (che contiene gli oggetti di tipo Task).
            throw new Error(`Il task con id ${task.id} esiste già nel progetto.`); //existingTask è il nome della variabile che rappresenta ciascun singolo elemento dell'array this.projectTasks
        }
        this.projectTasks.push(task);
    }

    // Modifica lo stato di un task
    updateTaskStatus(taskId: number, newStatus: statusTask): void {
        const task = this.projectTasks.find(t => t.id === taskId);  //find restituisce il primo elemento che soddisfa la condizione
        if (!task) {                // Se task è undefined (non trovato), entra in questo blocco
            throw new Error(`Il task con id ${taskId} non esiste nel progetto.`);
        }
        task.status = newStatus;
    }

    //Filtra i task ad alta priorità
    highPriorityTask(): Task[] {
        return this.projectTasks.filter(task => task.priority === 'ALTA');
    }
}



















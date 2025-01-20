import { ProjectManager } from './projectManager'; 
import { Task } from './task'; 
import { Project } from './project'; 

// Crea una nuova istanza di ProjectManager
const projectManager = new ProjectManager();

// Crea un progetto
const project1 = new Project(1, 'Progetto 1', 'Team A', new Date('2025-01-01'), new Date('2025-12-31'));
const project2 = new Project(2, 'Progetto 2', 'Team B', new Date('2025-02-01'), new Date('2025-11-30'));

// Aggiungiamo i progetti al manager
projectManager.addProject(project1);
projectManager.addProject(project2);


// Crea alcuni task
const task1 = new Task(1, 'Task 1', 'TO_DO', 'ALTA', 'Mario Rossi');
const task2 = new Task(2, 'Task 2', 'IN_PROGRESS', 'MEDIA', 'Luigi Bianchi');
const task3 = new Task(3, 'Task 3', 'DONE', 'BASSA', 'Giovanni Verdi');

// Aggiungiamo i task ai progetti
project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);



// Aggiorna lo stato di un task
//project1.updateTaskStatus(1, 'IN_PROGRESS');

// Rimuovi il progetto
//projectManager.removeProject(1);



// Recuperiamo i progetti per team
const progettiDelTeam = projectManager.progettiPerTeam('Team A');
console.log("I progetti del team sono: ");
progettiDelTeam.forEach(progetto => {
    console.log(`ID: ${progetto.id}, Nome: ${progetto.description}, Team: ${progetto.team}`);
});

// Recuperiamo i task ad alta priorità per il progetto1
const taskAltaPriorita = project1.taskAdAltaPriorita();
console.log("\nI task ad alta priorità sono: ");
taskAltaPriorita.forEach(task => {
    console.log(`ID: ${task.id}, Descrizione: ${task.description}, Priorità: ${task.priority}, Status: ${task.status}`);
});
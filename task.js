"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, description, status, priority, director) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.director = director;
    }
}
exports.Task = Task;

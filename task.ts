export type statusTask= 'TO_DO' | 'IN_PROGRESS' | 'DONE';

export class Task {
    constructor
    (
        public id: number,
        public description: string,
        public status: statusTask,
        public priority: 'BASSA' | 'MEDIA' | 'ALTA',
        public director: string
    ) { }
}
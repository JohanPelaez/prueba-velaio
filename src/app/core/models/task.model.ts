// core/models/task.model.ts
export interface Task {
  id: number;
  name: string;
  description?: string;
  dueDate: Date;
  status: 'pending' | 'completed';
  assignedPeople: Person[];
}

export interface Person {
  name: string;
  age: number;
  skills: string[];
}

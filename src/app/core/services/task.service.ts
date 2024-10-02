// core/services/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []; // Inicialmente un array vacío
  private nextId: number = 1; // Para generar IDs únicos

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
}

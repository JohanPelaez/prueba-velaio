import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../core/models/task.model';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = []; // Nueva variable para las tareas filtradas

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks; // Inicialmente, mostrar todas las tareas
  }

  filterTasks(event: any): void {
    const status = event.target.value;
    if (status === 'all') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.status === status);
    }
  }

  toggleTaskStatus(task: Task): void {
    task.status = task.status === 'pending' ? 'completed' : 'pending';
    this.taskService.updateTask(task); // Actualizar la tarea en el servicio
  }
}

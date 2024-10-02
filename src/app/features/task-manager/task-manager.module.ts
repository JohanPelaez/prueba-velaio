// task-manager.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PersonDetailsComponent } from '../../shared/components/person-details/person-details.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importar ReactiveFormsModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TaskCreateModalComponent } from './components/task-create-modal/task-create-modal.component';

@NgModule({
  declarations: [
    TaskListComponent,
    PersonDetailsComponent,
    TaskCreateComponent,
    TaskCreateModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importar ReactiveFormsModule
    MatDialogModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    TaskListComponent, // Exportar TaskListComponent para usarlo en AppModule
    TaskCreateComponent, // Exportar TaskCreateComponent para usarlo en AppModule
    TaskCreateModalComponent
  ]
})
export class TaskManagerModule { }

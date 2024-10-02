import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateModalComponent } from '../task-create-modal/task-create-modal.component';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskCreateModalComponent, {
      // width: '500px', // Ajusta el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

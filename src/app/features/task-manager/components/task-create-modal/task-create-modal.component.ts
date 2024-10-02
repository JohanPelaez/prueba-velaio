import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-create-modal',
  templateUrl: './task-create-modal.component.html',
  styleUrls: ['./task-create-modal.component.scss']
})
export class TaskCreateModalComponent {
  taskForm!: FormGroup;
  readonly dialogRef = inject(MatDialogRef<TaskCreateModalComponent>);

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      dueDate: ['', Validators.required],
      assignedPeople: this.fb.array([this.createPerson()])
    });
  }

  createPerson(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(18)]], // Validación de edad mínima
      skills: this.fb.array([new FormControl('', Validators.required)])
    });
  }

  get people(): FormArray {
    return this.taskForm.get('assignedPeople') as FormArray;
  }

  addPerson(): void {
    this.people.push(this.createPerson());
    this.taskForm.get('assignedPeople')?.updateValueAndValidity();
  }

  removePerson(index: number): void {
    this.people.removeAt(index);
    this.taskForm.get('assignedPeople')?.updateValueAndValidity();
  }

  addSkill(personIndex: number): void {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.push(new FormControl(''));

    skills.updateValueAndValidity();
    this.people.at(personIndex).updateValueAndValidity();
    this.people.updateValueAndValidity();
    this.taskForm.updateValueAndValidity();
  }

  getSkills(personIndex: number): FormArray {
    return this.people.at(personIndex).get('skills') as FormArray;
  }

  removeSkill(personIndex: number, skillIndex: number): void {
    const skills = this.people.at(personIndex).get('skills') as FormArray;
    skills.removeAt(skillIndex);

    skills.updateValueAndValidity();
    this.people.at(personIndex).updateValueAndValidity();
    this.people.updateValueAndValidity();
    this.taskForm.updateValueAndValidity();
  }

  showFormInfo(): void {
    console.log(this.taskForm);
    const assignedPeople = this.taskForm.get('assignedPeople') as FormArray;
    if (assignedPeople) {
      console.log('Estado de assignedPeople:', assignedPeople.valid);
      console.log('Errores de assignedPeople:', assignedPeople.errors);
      console.log('Estado de la persona:', assignedPeople.controls[0].valid);
      console.log('Errores de la persona:', assignedPeople.controls[0].errors);
      const skills = assignedPeople.controls[0].get('skills') as FormArray;
      if (skills) {
        console.log('Estado de las habilidades:', skills.valid);
        console.log('Errores de las habilidades:', skills.errors);
      } else {
        console.log('skills is null');
      }
    } else {
      console.log('assignedPeople is null');
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const assignedPeople = this.taskForm.get('assignedPeople') as FormArray;
      if (assignedPeople.length === 0) {
        alert('Debes asignar al menos una persona a la tarea.');
        return; // Detener el envío del formulario
      }
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset(); // Reiniciar el formulario después de enviar
      this.people.clear(); // Limpiar el FormArray de personas
      this.people.push(this.createPerson()); // Añadir una persona por defecto
      this.dialogRef.close(); // Cerrar el modal
    }
  }
}

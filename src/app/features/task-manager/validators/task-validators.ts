import { AbstractControl, ValidationErrors } from '@angular/forms';

export function requireMinPeople(minPeople: number = 1): ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const peopleArray = control.get('assignedPeople');
    if (peopleArray && peopleArray.value.length >= minPeople) {
      return null; // Válido si hay al menos minPeople personas
    } else {
      return { requireMinPeople: true }; // Inválido si no hay suficientes personas
    }
  };
}

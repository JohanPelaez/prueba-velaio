// person-details.component.ts
import { Component, Input } from '@angular/core';
import { Person } from '../../../core/models/task.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {
  @Input() person!: Person;
}

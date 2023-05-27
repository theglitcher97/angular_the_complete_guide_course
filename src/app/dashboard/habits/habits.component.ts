import { Component, Input } from '@angular/core';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent {
  @Input() habitsList!: Habit[];
}

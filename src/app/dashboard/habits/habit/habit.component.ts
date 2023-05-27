import { Component, Input } from '@angular/core';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent {
  @Input() habit!: Habit;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent {
  @Input() habitsList!: Habit[];
  @Output() onRemoveHabit: EventEmitter<Habit> = new EventEmitter<Habit>();
  @Output() onEditHabit: EventEmitter<Habit> = new EventEmitter<Habit>();

  onRemoveHabitEvent(habit: Habit) {
    this.onRemoveHabit.emit(habit);
  }

  onEditingHabitEvent(habit: Habit) {
    this.onEditHabit.emit(habit);
  }
}

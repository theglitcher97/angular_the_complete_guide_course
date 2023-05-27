import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent {
  @Input() habit!: Habit;
  @Input() index!: number;
  @Output() onHabitDeletedEvent: EventEmitter<Habit> =
    new EventEmitter<Habit>();
  @Output() onEditHabitEvent: EventEmitter<Habit> = new EventEmitter<Habit>();

  onDropdownClicked(dropdown: HTMLDivElement) {
    dropdown.classList.toggle('open');
  }

  onEditHabit(habit: Habit) {
    this.onEditHabitEvent.emit(habit);
  }

  onDeleteHabit(habit: Habit) {
    this.onHabitDeletedEvent.emit(habit);
  }
}

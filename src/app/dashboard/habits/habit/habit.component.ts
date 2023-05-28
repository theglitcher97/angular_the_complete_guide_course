import { Component, Input } from '@angular/core';
import { Habit } from '../../models/habit';
import { HabitsService } from '../../../shared/services/habits.service';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent {
  @Input() habit!: Habit;

  constructor(private habitsService: HabitsService) {}

  onDropdownClicked(dropdown: HTMLDivElement) {
    dropdown.classList.toggle('open');
  }

  onEditHabit(habit: Habit) {
    this.habitsService.habitSelectedToEdit(habit);
  }

  onDeleteHabit(habit: Habit) {
    this.habitsService.removeHabit(habit);
  }
}

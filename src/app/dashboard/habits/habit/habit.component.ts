import { Component, Input, OnInit } from '@angular/core';
import { Habit } from '../../models/habit';
import { HabitsService } from '../../../shared/services/habits.service';
import { EDIT_HABIT_PATH } from '../../../shared/constants/RoutingConstants';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent implements OnInit {
  @Input() habit!: Habit;
  protected EDIT_HABIT_PATH!: string;

  constructor(private habitsService: HabitsService) {}

  ngOnInit() {
    this.EDIT_HABIT_PATH = EDIT_HABIT_PATH.replace(
      ':id',
      String(this.habit.id)
    );
  }

  onDropdownClicked(dropdown: HTMLDivElement) {
    dropdown.classList.toggle('open');
  }

  onDeleteHabit(habit: Habit) {
    this.habitsService.removeHabit(habit);
  }
}

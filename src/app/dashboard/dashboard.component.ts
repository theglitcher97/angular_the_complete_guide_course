import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Habit, ImpactEnum } from './models/habit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnChanges {
  @Input() habits!: Habit[];
  @Output() onRemovedHabit: EventEmitter<Habit> = new EventEmitter<Habit>();
  @Output() onEditHabit: EventEmitter<Habit> = new EventEmitter<Habit>();
  public progressBar!: number;
  private minProgressBar = 1;

  ngOnChanges({ habits }: SimpleChanges): void {
    if (habits && habits.currentValue) {
      this.habits = habits.currentValue;
      this.calculateProgressbar(this.habits);
    }
  }

  onRemoveHabit(habit: Habit) {
    this.onRemovedHabit.emit(habit);
  }

  onEditHabitAction(habit: Habit) {
    this.onEditHabit.emit(habit);
  }

  calculateProgressbar(habits: Habit[]) {
    let totalPoints = 0,
      positivePoints = 0,
      negativePoints = 0,
      points;
    habits.forEach((habit) => {
      if (habit.impact === ImpactEnum.neutral) return;
      points = habit.times_a_day * habit.days_per_week;
      if (habit.days_per_week >= 5) points += habit.days_per_week - 4;
      if (habit.impact === ImpactEnum.positive) positivePoints += points;
      if (habit.impact === ImpactEnum.negative) negativePoints += points;
      totalPoints += points;
    });

    const progress = Math.round((positivePoints / totalPoints) * 100);
    this.progressBar =
      progress > this.minProgressBar ? progress : this.minProgressBar;
  }
}

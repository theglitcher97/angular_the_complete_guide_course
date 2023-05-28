import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ImpactEnum } from './models/habit';
import { HabitsService } from '../shared/services/habits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnChanges {
  public progressBar!: number;
  private minProgressBar = 1;

  constructor(private habitsService: HabitsService) {}

  ngOnChanges({ habits }: SimpleChanges): void {
    if (habits && habits.currentValue) {
      this.calculateProgressbar();
    }
  }

  calculateProgressbar() {
    let totalPoints = 0,
      positivePoints = 0,
      negativePoints = 0,
      points;
    this.habitsService.habits.forEach((habit) => {
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

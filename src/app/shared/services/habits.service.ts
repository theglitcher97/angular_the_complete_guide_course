import { Habit, ImpactEnum } from '../../dashboard/models/habit';
import { Injectable, OnInit } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HabitsService implements OnInit {
  public habits: Habit[] = [
    new Habit('Exercise', ImpactEnum.positive, 4, 4),
    new Habit('Drink Alcohol', ImpactEnum.negative, 2, 4),
    new Habit('Go to work', ImpactEnum.neutral, 1, 5),
  ];
  public selectedTab = 'dashboard';
  public habit!: Habit | undefined;
  progressBarValue!: number;
  private habitsCopy!: Habit[];
  private minProgressBar: number = 1;

  ngOnInit(): void {
    this.progressBarValue = 0;
  }

  public addHabit(habit: Habit) {
    this.habits.push(habit);
    this.habitsCopy = [...this.habits];
    this.calculateProgressBar();
  }

  public editHabit(habit: Habit) {
    const index = this.habits.findIndex((h) => h.id === habit.id);
    if (index !== -1) {
      this.habits[index] = habit;
      this.habitsCopy = [...this.habits];
    }
    this.calculateProgressBar();
  }

  public habitSelectedToEdit(habit: Habit) {
    this.selectedTab = 'add-habit';
    this.habit = habit;
  }

  public removeHabit(habit: Habit) {
    const index = this.habits.findIndex((h) => habit.id === h.id);
    if (index !== -1) {
      this.habits.splice(index, 1);
      this.habitsCopy = [...this.habits];
    }
    this.calculateProgressBar();
  }

  public onSearchHabit(name: string) {
    this.habits = [...this.habitsCopy];
    this.habits = this.habits.filter((habit) =>
      habit.name.toLowerCase().includes(name)
    );
    this.calculateProgressBar();
  }

  calculateProgressBar() {
    let totalPoints = 0,
      positivePoints = 0,
      negativePoints = 0,
      points;
    this.habits.forEach((habit) => {
      if (habit.impact === ImpactEnum.neutral) return;
      points = habit.times_a_day * habit.days_per_week;
      if (habit.days_per_week >= 5) points += habit.days_per_week - 4;
      if (habit.impact === ImpactEnum.positive) positivePoints += points;
      if (habit.impact === ImpactEnum.negative) negativePoints += points;
      totalPoints += points;
    });

    const progress = Math.round((positivePoints / totalPoints) * 100);
    this.progressBarValue =
      progress > this.minProgressBar ? progress : this.minProgressBar;
  }
}

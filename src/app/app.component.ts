import { Component } from '@angular/core';
import { Habit, ImpactEnum } from './dashboard/models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedTab = 'dashboard';
  public habit!: Habit | undefined;
  public habits: Habit[] = [
    new Habit('Exercise', ImpactEnum.positive, 4, 4),
    new Habit('Drink Alcohol', ImpactEnum.negative, 2, 4),
    new Habit('Go to work', ImpactEnum.neutral, 1, 5),
  ];

  onNavigate(tab: string) {
    this.selectedTab = tab;
    this.habit = undefined;
  }

  onNewHabitCreated(habit: Habit) {
    this.habits.push(habit);
  }

  onRemoveHabit(habit: Habit) {
    let index = this.habits.findIndex((h) => habit.id === h.id);
    if (index !== -1) this.habits.splice(index, 1);
  }

  onEditHabit(habit: Habit) {
    this.selectedTab = 'add-habit';
    this.habit = habit;
  }

  onHabitEdited(habit1: Habit) {
    const index = this.habits.findIndex((habit) => habit.id === habit1.id);
    if (index !== -1) this.habits[index] = habit1;
  }
}

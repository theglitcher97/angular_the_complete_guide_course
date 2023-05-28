import { Component, OnInit } from '@angular/core';
import { Habit } from './dashboard/models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public selectedTab = 'dashboard';
  public habit!: Habit | undefined;
  public habitsCopy!: Habit[];
  public habits: Habit[] = [];

  ngOnInit() {
    this.habitsCopy = [...this.habits];
  }

  onNavigate(tab: string) {
    this.selectedTab = tab;
    this.habit = undefined;
  }

  onNewHabitCreated(habit: Habit) {
    this.habits.push(habit);
    this.habitsCopy = [...this.habits];
  }

  onRemoveHabit(habit: Habit) {
    let index = this.habits.findIndex((h) => habit.id === h.id);
    if (index !== -1) {
      this.habits.splice(index, 1);
      this.habits = [...this.habits];
      this.habitsCopy = [...this.habits];
    }
  }

  onEditHabit(habit: Habit) {
    this.selectedTab = 'add-habit';
    this.habit = habit;
  }

  onHabitEdited(habit1: Habit) {
    const index = this.habits.findIndex((habit) => habit.id === habit1.id);
    if (index !== -1) {
      this.habits[index] = habit1;
      this.habitsCopy = [...this.habits];
    }
  }

  onSearchHabit(name: string) {
    this.habits = [...this.habitsCopy];
    this.habits = this.habits.filter((habit) =>
      habit.name.toLowerCase().includes(name)
    );
  }
}

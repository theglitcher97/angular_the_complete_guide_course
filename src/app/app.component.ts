import { Component, OnInit } from '@angular/core';
import { Habit } from './dashboard/models/habit';
import { HabitsService } from './shared/services/habits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public habit!: Habit | undefined;
  public habitsCopy!: Habit[];
  public habits: Habit[] = [];

  constructor(public habitsService: HabitsService) {}

  ngOnInit() {
    this.habitsCopy = [...this.habits];
  }

  onNavigate(tab: string) {
    this.habitsService.selectedTab = tab;
    this.habitsService.habit = undefined;
  }

  onSearchHabit(name: string) {
    this.habitsService.onSearchHabit(name);
  }
}

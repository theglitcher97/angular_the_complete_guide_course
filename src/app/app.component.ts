import { Component, OnInit } from '@angular/core';
import { Habit } from './dashboard/models/habit';
import { HabitsService } from './shared/services/habits.service';
import {
  DASHBOARD_PATH,
  HABIT_PATH,
} from './shared/constants/RoutingConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public habit!: Habit | undefined;
  public habitsCopy!: Habit[];
  public habits: Habit[] = [];
  protected readonly DASHBOARD_PATH = DASHBOARD_PATH;
  protected readonly HABIT_PATH = HABIT_PATH;

  constructor(public habitsService: HabitsService) {}

  ngOnInit() {
    this.habitsCopy = [...this.habits];
    this.habitsService.calculateProgressBar();
  }

  onSearchHabit(name: string) {
    this.habitsService.onSearchHabit(name);
  }
}

import { Component, OnInit } from '@angular/core';
import { Habit } from '../models/habit';
import { HabitsService } from '../../shared/services/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent implements OnInit {
  public habitsList!: Habit[];

  constructor(private habitsService: HabitsService) {}

  ngOnInit() {
    this.habitsList = this.habitsService.habits;
    this.habitsService.calculateProgressBar();
  }
}

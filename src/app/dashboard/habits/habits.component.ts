import { Component } from '@angular/core';
import { Habit, ImpactEnum } from '../models/habit';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent {
  public habitsList: Habit[] = [
    new Habit('Exercise', ImpactEnum.positive, 4, 4),
    new Habit('Drink Alcohol', ImpactEnum.negative, 2, 4),
    new Habit('Go to work', ImpactEnum.neutral, 1, 5),
  ];
}

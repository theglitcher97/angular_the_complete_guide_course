import { Component } from '@angular/core';
import { HabitsService } from '../shared/services/habits.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public habitsService: HabitsService) {}
}

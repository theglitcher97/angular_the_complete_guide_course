import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Habit } from './models/habit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnChanges {
  @Input() habits!: Habit[];
  @Output() onRemovedHabit: EventEmitter<Habit> = new EventEmitter<Habit>();

  ngOnChanges({ habits }: SimpleChanges): void {
    if (habits && habits.currentValue) {
      this.habits = habits.currentValue;
    }
  }

  onRemoveHabit(habit: Habit) {
    this.onRemovedHabit.emit(habit);
  }
}

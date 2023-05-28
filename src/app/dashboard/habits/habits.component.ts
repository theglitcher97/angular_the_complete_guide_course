import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habit } from '../models/habit';
import { HabitsService } from '../../shared/services/habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css'],
})
export class HabitsComponent implements OnInit {
  @Input() habitsList!: Habit[];
  @Output() onRemoveHabit: EventEmitter<Habit> = new EventEmitter<Habit>();
  @Output() onEditHabit: EventEmitter<Habit> = new EventEmitter<Habit>();

  constructor(private habitsService: HabitsService) {}

  ngOnInit() {
    this.habitsList = this.habitsService.habits;
  }

  onRemoveHabitEvent(habit: Habit) {
    this.onRemoveHabit.emit(habit);
  }

  onEditingHabitEvent(habit: Habit) {
    this.onEditHabit.emit(habit);
  }
}

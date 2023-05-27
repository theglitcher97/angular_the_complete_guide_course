import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent implements OnChanges {
  @Input() habit!: Habit;
  @Input() index!: number;
  @Output() onHabitDeletedEvent: EventEmitter<Habit> =
    new EventEmitter<Habit>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onDropdownClicked(dropdown: HTMLDivElement) {
    dropdown.classList.toggle('open');
  }

  onEditHabit(habit: Habit) {
    console.log('editing habit');
  }

  onDeleteHabit(habit: Habit) {
    this.onHabitDeletedEvent.emit(habit);
  }
}

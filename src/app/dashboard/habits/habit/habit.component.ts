import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css'],
})
export class HabitComponent implements OnChanges {
  @Input() habit!: Habit;
  @Input() index!: number;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onDropdownClicked(dropdown: HTMLDivElement) {
    dropdown.classList.toggle('open');
  }
}

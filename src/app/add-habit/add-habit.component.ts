import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Habit, ImpactEnum } from '../dashboard/models/habit';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.css'],
})
export class AddHabitComponent {
  @ViewChild('habitName') habitName!: ElementRef;
  @ViewChild('habitImpact') habitImpact!: ElementRef;
  @ViewChild('habitTimesADay') habitTimesADay!: ElementRef;
  @ViewChild('habitDaysPerWeek') habitDaysPerWeek!: ElementRef;
  @Output() newHabitAddedEvent: EventEmitter<Habit> = new EventEmitter<Habit>();
  public newHabitAddedMessage = 'New habit was added successfully!';
  public displayMessage = false;
  protected readonly ImpactEnum = ImpactEnum;

  onSubmit() {
    const name = this.habitName.nativeElement.value as string;
    const impact = this.habitImpact.nativeElement.value;
    const times_a_day = this.habitTimesADay.nativeElement.value as number;
    const days_per_week = this.habitDaysPerWeek.nativeElement.value as number;

    if (!this.isHabitValid(name, impact, times_a_day, days_per_week)) return;

    this.newHabitAddedEvent.emit(
      new Habit(name, impact, times_a_day, days_per_week)
    );

    this.displayMessage = true;
    setTimeout(() => (this.displayMessage = false), 2000);

    this.resetForm();
  }

  private isHabitValid(
    name: string,
    impact: string,
    times_a_day: number,
    days_per_week: number
  ) {
    return (
      name.trim().length > 0 && impact && times_a_day > 0 && days_per_week > 0
    );
  }

  private resetForm() {
    this.habitName.nativeElement.value = '';
    this.habitImpact.nativeElement.value = this.ImpactEnum.positive;
    this.habitTimesADay.nativeElement.value = 1;
    this.habitDaysPerWeek.nativeElement.value = 1;
  }
}

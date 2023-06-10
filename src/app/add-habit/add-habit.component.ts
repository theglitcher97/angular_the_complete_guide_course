import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Habit, ImpactEnum } from '../dashboard/models/habit';
import { HabitsService } from '../shared/services/habits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DASHBOARD_PATH } from '../shared/constants/RoutingConstants';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.css'],
})
export class AddHabitComponent implements AfterViewInit, OnInit {
  public habit!: Habit | undefined;
  @ViewChild('habitName') habitName!: ElementRef;
  @ViewChild('habitImpact') habitImpact!: ElementRef;
  @ViewChild('habitTimesADay') habitTimesADay!: ElementRef;
  @ViewChild('habitDaysPerWeek') habitDaysPerWeek!: ElementRef;
  public newHabitAddedMessage = 'New habit was added successfully!';
  public displayMessage = false;
  public action!: string;
  protected readonly ADD_ACTION = 'add';
  protected readonly EDIT_ACTION = 'edit';
  protected readonly ImpactEnum = ImpactEnum;

  constructor(
    private habitsService: HabitsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const habitId = +this.activatedRoute.snapshot.params['id'];
    this.action = this.ADD_ACTION;
    if (!isNaN(habitId)) {
      this.habit = this.habitsService.get(habitId);
      this.action = this.EDIT_ACTION;
    }
  }

  ngAfterViewInit() {
    if (this.habit) this.fillForm(this.habit);
  }

  onSubmit() {
    const name = this.habitName.nativeElement.value as string;
    const impact = this.habitImpact.nativeElement.value;
    const times_a_day = this.habitTimesADay.nativeElement.value as number;
    const days_per_week = this.habitDaysPerWeek.nativeElement.value as number;

    if (!this.isHabitValid(name, impact, times_a_day, days_per_week)) return;

    if (this.action === this.ADD_ACTION) {
      this.habitsService.addHabit(
        new Habit(name, impact, times_a_day, days_per_week)
      );
    } else if (this.habit) {
      this.habit.name = name;
      this.habit.impact = impact;
      this.habit.times_a_day = times_a_day;
      this.habit.days_per_week = days_per_week;

      this.habitsService.editHabit(this.habit);
      this.newHabitAddedMessage =
        'Habit ' + this.habit?.name + ' was edited successfully!';
    }

    this.displayMessage = true;
    setTimeout(() => {
      this.router.navigate([DASHBOARD_PATH]);
    }, 1000);
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

  private fillForm(habit: Habit) {
    if (this.habit) {
      this.habitName.nativeElement.value = habit.name;
      this.habitImpact.nativeElement.value = habit.impact;
      this.habitTimesADay.nativeElement.value = habit.times_a_day;
      this.habitDaysPerWeek.nativeElement.value = habit.days_per_week;
    }
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImpactEnum } from '../dashboard/models/habit';

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
  protected readonly ImpactEnum = ImpactEnum;

  onSubmit() {
    console.log('name -> ', this.habitName.nativeElement.value);
    console.log('impact -> ', this.habitImpact.nativeElement.value);
    console.log('tad -> ', this.habitTimesADay.nativeElement.value);
    console.log('dpw -> ', this.habitDaysPerWeek.nativeElement.value);
    console.log('Productive level -> ', this.calculateProductivity());
  }

  /**
   * @Deprecated this method is just for testing
   * @private
   */
  private calculateProductivity() {
    return ImpactEnum.positive === this.habitImpact.nativeElement.value
      ? 100
      : 0;
  }
}

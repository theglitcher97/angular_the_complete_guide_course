import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HabitsComponent } from './dashboard/habits/habits.component';
import { HabitComponent } from './dashboard/habits/habit/habit.component';
import { AddHabitComponent } from './add-habit/add-habit.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HabitsComponent, HabitComponent, AddHabitComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { NgModule } from '@angular/core';
import {
  DASHBOARD_PATH,
  EDIT_HABIT_PATH,
  HABIT_PATH,
} from './shared/constants/RoutingConstants';

const appRoutes: Routes = [
  { path: DASHBOARD_PATH, component: DashboardComponent },
  { path: HABIT_PATH, component: AddHabitComponent },
  { path: EDIT_HABIT_PATH, component: AddHabitComponent },
  { path: '**', redirectTo: DASHBOARD_PATH, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHabitComponent } from './add-habit/add-habit.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-habit', component: AddHabitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

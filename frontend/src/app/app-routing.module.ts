import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { ExersicetrackingComponent } from './exersicetracking/exersicetracking.component';
import { GoalsettingComponent} from './goalsetting/goalsetting.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { WorkouthistoryComponent } from './workouthistory/workouthistory.component';

const routes: Routes = [
  {
    path: '', component: RegistrationComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },

  {
    path: '**', component:ErrorPageComponent
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workout', component: WorkoutplanComponent},
  { path: 'exertracking', component: ExersicetrackingComponent},
  { path: 'goalsetting', component: GoalsettingComponent},
  { path: 'recommendations', component: RecommendationsComponent},
  { path: 'history', component: WorkouthistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

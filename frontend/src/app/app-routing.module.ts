import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { WorkoutplanComponent } from './components/workoutplan/workoutplan.component';
import { ExersicetrackingComponent } from './components/exersicetracking/exersicetracking.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { WorkouthistoryComponent } from './components/workouthistory/workouthistory.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GoalhomeComponent } from './components/goalhome/goalhome.component';
import { AchievedGoalsComponent } from './components/achieved-goals/achieved-goals.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path:'goalhome',component: GoalhomeComponent},
  {path:'tracking',component:ExersicetrackingComponent},
  {path:'goalhome/goalsets',component:GoalSettingComponent},
  { path: 'workout', component: WorkoutplanComponent },
  { path: 'exertracking', component: ExersicetrackingComponent },
  {path:'goalhome/achievedgoals',component:AchievedGoalsComponent},
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'history', component: WorkouthistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

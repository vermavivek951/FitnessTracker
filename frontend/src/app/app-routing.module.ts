import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievedGoalsComponent } from './components/achieved-goals/achieved-goals.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CalwtcompComponent } from './components/exersicetracking/calwtcomp/calwtcomp.component';
import { ExersicetrackingComponent } from './components/exersicetracking/exersicetracking.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';
import { GoalhomeComponent } from './components/goalhome/goalhome.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WorkouthistoryComponent } from './components/workouthistory/workouthistory.component';
import { WorkoutplanComponent } from './components/workoutplan/workoutplan.component';
import { guardGuard } from './services/guard.guard';

// import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [guardGuard] },
  { path: 'goalhome', component: GoalhomeComponent, canActivate: [guardGuard] },
  { path: 'goalhome/goalsets', component: GoalSettingComponent, canActivate: [guardGuard] },
  { path: 'goalhome/achievedgoals', component: AchievedGoalsComponent, canActivate: [guardGuard] },
  { path: 'tracking', component: ExersicetrackingComponent, canActivate: [guardGuard] },
  { path: 'tracking/calweighttracking', component: CalwtcompComponent, canActivate: [guardGuard] },
  { path: 'workout', component: WorkoutplanComponent, canActivate: [guardGuard] },
  { path: 'recommendations', component: RecommendationsComponent, canActivate: [guardGuard] },
  { path: 'history', component: WorkouthistoryComponent, canActivate: [guardGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent},
  { path: 'goalhome', component: GoalhomeComponent},
  { path: 'goalhome/goalsets', component: GoalSettingComponent},
  { path: 'goalhome/achievedgoals', component: AchievedGoalsComponent},
  { path: 'tracking', component: ExersicetrackingComponent},
  { path: 'workout', component: WorkoutplanComponent},
  { path: 'recommendations', component: RecommendationsComponent},
  { path: 'history', component: WorkouthistoryComponent},
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

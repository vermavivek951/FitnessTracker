import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalSettingComponent } from './goal-setting/goal-setting.component';
import { AchievedGoalsComponent } from './achieved-goals/achieved-goals.component';
import { GoalhomeComponent } from './goalhome/goalhome.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
    path:'goalhome',component:GoalhomeComponent
  },
  {
    path:'goalhome/goalset',component:GoalSettingComponent
  },
  {
    path:'goalhome/achievedgoals',component:AchievedGoalsComponent
  }
])

  ],
           
  exports: [RouterModule]
})
export class AppRoutingModule { }

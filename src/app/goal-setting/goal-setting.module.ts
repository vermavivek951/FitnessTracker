import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { GoalSettingComponent } from './goal-setting.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    GoalSettingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
})
export class GoalSettingModule { }

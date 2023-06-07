import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalSettingModule } from './goal-setting/goal-setting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AchievedGoalsComponent } from './achieved-goals/achieved-goals.component';
import { GoalhomeComponent } from './goalhome/goalhome.component';
@NgModule({
  declarations: [
    AppComponent,
    AchievedGoalsComponent,
    GoalhomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoalSettingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

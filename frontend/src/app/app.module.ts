import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { WorkoutplanComponent } from './components/workoutplan/workoutplan.component';
import { ExersicetrackingComponent } from './components/exersicetracking/exersicetracking.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { WorkouthistoryComponent } from './components/workouthistory/workouthistory.component';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './components/profile/profile.component';
import { GoalhomeComponent } from './components/goalhome/goalhome.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TrackingComponent } from './components/tracking/tracking.component'
import { AchievedGoalsComponent } from './components/achieved-goals/achieved-goals.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    WorkoutplanComponent,
    ExersicetrackingComponent,
    RecommendationsComponent,
    WorkouthistoryComponent,
    ProfileComponent,
    GoalhomeComponent,
    GoalSettingComponent,
    AchievedGoalsComponent,
    TrackingComponent,
    AchievedGoalsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    // GoalSettingModule,


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

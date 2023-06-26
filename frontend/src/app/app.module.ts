import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
// import { MatAvatarModule } from '@angular/material/';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievedGoalsComponent } from './components/achieved-goals/achieved-goals.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CalwtcompComponent } from './components/exersicetracking/calwtcomp/calwtcomp.component';
import { ExersicetrackingComponent } from './components/exersicetracking/exersicetracking.component';
import { GoalSettingComponent } from './components/goal-setting/goal-setting.component';
import { GoalhomeComponent } from './components/goalhome/goalhome.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomNutritionRecomendationComponent } from './components/recommendations/custom-nutrition-recomendation/custom-nutrition-recomendation.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WorkouthistoryComponent } from './components/workouthistory/workouthistory.component';
import { WorkoutplanComponent } from './components/workoutplan/workoutplan.component';
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
    AchievedGoalsComponent,
    ErrorPageComponent,
    CustomNutritionRecomendationComponent,
    CalwtcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

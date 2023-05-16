import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddHistoryComponent } from './add-history/add-history.component';
import { WorkoutMainComponent } from './workout-main/workout-main.component';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    AddHistoryComponent,
    WorkoutMainComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'workout',component:WorkoutMainComponent
      },
      {
        path:'workout/list',component:WorkoutListComponent
      },
      {
        path:'workout/history',component:AddHistoryComponent
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

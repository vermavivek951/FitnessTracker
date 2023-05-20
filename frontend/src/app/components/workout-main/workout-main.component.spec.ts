import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutMainComponent } from './workout-main.component';

describe('WorkoutMainComponent', () => {
  let component: WorkoutMainComponent;
  let fixture: ComponentFixture<WorkoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

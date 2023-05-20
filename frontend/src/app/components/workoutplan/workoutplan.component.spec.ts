import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutplanComponent } from './workoutplan.component';

describe('WorkoutplanComponent', () => {
  let component: WorkoutplanComponent;
  let fixture: ComponentFixture<WorkoutplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

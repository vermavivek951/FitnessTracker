import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsettingComponent } from './goalsetting.component';

describe('GoalsettingComponent', () => {
  let component: GoalsettingComponent;
  let fixture: ComponentFixture<GoalsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

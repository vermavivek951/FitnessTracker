import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExersicetrackingComponent } from './exersicetracking.component';

describe('ExersicetrackingComponent', () => {
  let component: ExersicetrackingComponent;
  let fixture: ComponentFixture<ExersicetrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExersicetrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExersicetrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

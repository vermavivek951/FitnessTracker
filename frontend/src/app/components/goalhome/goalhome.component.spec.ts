import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalhomeComponent } from './goalhome.component';

describe('GoalhomeComponent', () => {
  let component: GoalhomeComponent;
  let fixture: ComponentFixture<GoalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

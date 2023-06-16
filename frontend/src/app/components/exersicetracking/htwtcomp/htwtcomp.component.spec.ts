import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtwtcompComponent } from './htwtcomp.component';

describe('HtwtcompComponent', () => {
  let component: HtwtcompComponent;
  let fixture: ComponentFixture<HtwtcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtwtcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtwtcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

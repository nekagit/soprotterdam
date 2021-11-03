import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSComponent } from './landing-s.component';

describe('LandingSComponent', () => {
  let component: LandingSComponent;
  let fixture: ComponentFixture<LandingSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

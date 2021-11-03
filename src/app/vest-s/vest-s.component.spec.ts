import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestSComponent } from './vest-s.component';

describe('VestSComponent', () => {
  let component: VestSComponent;
  let fixture: ComponentFixture<VestSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

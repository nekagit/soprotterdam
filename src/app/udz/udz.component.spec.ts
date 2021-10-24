import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdzComponent } from './udz.component';

describe('UdzComponent', () => {
  let component: UdzComponent;
  let fixture: ComponentFixture<UdzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

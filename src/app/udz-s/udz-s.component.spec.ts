import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdzSComponent } from './udz-s.component';

describe('UdzSComponent', () => {
  let component: UdzSComponent;
  let fixture: ComponentFixture<UdzSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdzSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdzSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaterpoloComponent } from './vaterpolo.component';

describe('VaterpoloComponent', () => {
  let component: VaterpoloComponent;
  let fixture: ComponentFixture<VaterpoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaterpoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaterpoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

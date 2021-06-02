import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkolaComponent } from './skola.component';

describe('SkolaComponent', () => {
  let component: SkolaComponent;
  let fixture: ComponentFixture<SkolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

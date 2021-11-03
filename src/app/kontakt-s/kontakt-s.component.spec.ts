import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktSComponent } from './kontakt-s.component';

describe('KontaktSComponent', () => {
  let component: KontaktSComponent;
  let fixture: ComponentFixture<KontaktSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

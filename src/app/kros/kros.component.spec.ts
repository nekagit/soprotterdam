import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrosComponent } from './kros.component';

describe('KrosComponent', () => {
  let component: KrosComponent;
  let fixture: ComponentFixture<KrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

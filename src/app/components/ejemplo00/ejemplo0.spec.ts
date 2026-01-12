import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo0 } from './ejemplo0';

describe('Ejemplo0', () => {
  let component: Ejemplo0;
  let fixture: ComponentFixture<Ejemplo0>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo0]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

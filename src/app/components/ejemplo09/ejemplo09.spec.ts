import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo09 } from './ejemplo09';

describe('Ejemplo09', () => {
  let component: Ejemplo09;
  let fixture: ComponentFixture<Ejemplo09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo09]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

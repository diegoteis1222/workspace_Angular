import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo08 } from './ejemplo08';

describe('Ejemplo08', () => {
  let component: Ejemplo08;
  let fixture: ComponentFixture<Ejemplo08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

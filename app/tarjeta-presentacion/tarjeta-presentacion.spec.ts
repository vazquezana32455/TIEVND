import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPresentacion } from './tarjeta-presentacion';

describe('TarjetaPresentacion', () => {
  let component: TarjetaPresentacion;
  let fixture: ComponentFixture<TarjetaPresentacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPresentacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPresentacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePrestamoComponent } from './reporte-prestamo.component';

describe('ReportePrestamoComponent', () => {
  let component: ReportePrestamoComponent;
  let fixture: ComponentFixture<ReportePrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteHistorialComponent } from './reporte-historial.component';

describe('ReporteHistorialComponent', () => {
  let component: ReporteHistorialComponent;
  let fixture: ComponentFixture<ReporteHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

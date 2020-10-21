import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLibroFiltroComponent } from './consulta-libro-filtro.component';

describe('ConsultaLibroFiltroComponent', () => {
  let component: ConsultaLibroFiltroComponent;
  let fixture: ComponentFixture<ConsultaLibroFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLibroFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLibroFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

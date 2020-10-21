import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUsuarioFiltroComponent } from './consulta-usuario-filtro.component';

describe('ConsultaUsuarioFiltroComponent', () => {
  let component: ConsultaUsuarioFiltroComponent;
  let fixture: ComponentFixture<ConsultaUsuarioFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaUsuarioFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaUsuarioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

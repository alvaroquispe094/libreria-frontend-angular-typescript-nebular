import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUsuarioListaComponent } from './consulta-usuario-lista.component';

describe('ConsultaUsuarioListaComponent', () => {
  let component: ConsultaUsuarioListaComponent;
  let fixture: ComponentFixture<ConsultaUsuarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaUsuarioListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaUsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

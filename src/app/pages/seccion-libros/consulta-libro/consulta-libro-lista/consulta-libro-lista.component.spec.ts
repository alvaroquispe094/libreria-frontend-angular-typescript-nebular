import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLibroListaComponent } from './consulta-libro-lista.component';

describe('ConsultaLibroListaComponent', () => {
  let component: ConsultaLibroListaComponent;
  let fixture: ComponentFixture<ConsultaLibroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLibroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLibroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

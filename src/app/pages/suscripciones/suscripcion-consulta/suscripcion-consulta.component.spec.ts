import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionConsultaComponent } from './suscripcion-consulta.component';

describe('SuscripcionConsultaComponent', () => {
  let component: SuscripcionConsultaComponent;
  let fixture: ComponentFixture<SuscripcionConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscripcionConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

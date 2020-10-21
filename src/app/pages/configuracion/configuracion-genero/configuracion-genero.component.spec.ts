import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGeneroComponent } from './configuracion-genero.component';

describe('ConfiguracionGeneroComponent', () => {
  let component: ConfiguracionGeneroComponent;
  let fixture: ComponentFixture<ConfiguracionGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

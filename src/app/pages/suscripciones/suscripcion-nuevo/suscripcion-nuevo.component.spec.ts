import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionNuevoComponent } from './suscripcion-nuevo.component';

describe('SuscripcionNuevoComponent', () => {
  let component: SuscripcionNuevoComponent;
  let fixture: ComponentFixture<SuscripcionNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscripcionNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

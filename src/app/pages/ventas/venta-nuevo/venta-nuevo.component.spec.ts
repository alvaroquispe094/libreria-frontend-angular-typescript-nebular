import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaNuevoComponent } from './venta-nuevo.component';

describe('VentaNuevoComponent', () => {
  let component: VentaNuevoComponent;
  let fixture: ComponentFixture<VentaNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

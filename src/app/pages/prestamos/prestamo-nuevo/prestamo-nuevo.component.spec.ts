import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoNuevoComponent } from './prestamo-nuevo.component';

describe('PrestamoNuevoComponent', () => {
  let component: PrestamoNuevoComponent;
  let fixture: ComponentFixture<PrestamoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

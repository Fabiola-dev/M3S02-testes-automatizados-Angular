import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2Component } from './componente2.component';

describe('Componente2Component', () => {
  let component: Componente2Component;
  let fixture: ComponentFixture<Componente2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente2Component]
    });
    fixture = TestBed.createComponent(Componente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Deve validar o método calcularMedia', () => {
    const num1 = 8;
    const num2 = 6;
    const num3 = 10;
    const media = (num1 + num2 + num3) / 3;
    expect(component.calcularMedia(num1,num2,num3)).toEqual(media);
  });
});

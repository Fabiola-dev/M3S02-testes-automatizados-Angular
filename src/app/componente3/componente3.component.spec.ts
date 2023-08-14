import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3Component } from './componente3.component';

describe('Componente3Component', () => {
  let component: Componente3Component;
  let fixture: ComponentFixture<Componente3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente3Component]
    });
    fixture = TestBed.createComponent(Componente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar ao início do array quando chamado', () => {
    let valor = 'valor 4';
    let array = component.insertStart(valor);

    expect(array).toBeTruthy();
  });

  it('deve aumentar o array quando adicionar mais um item.', () => {
    let tamanhoArray = component.array.length;
    component.insertStart('valor 4');

    expect(component.array.length).toBeGreaterThan(tamanhoArray);
  });

  it('deve remover um item do array quando chamado.', () => {
    let tamanhoArray = component.array.length;
    component.removeIten('valor 1');
    component.removeIten('valor 4');
    
    expect(component.array.length).toBeLessThan(tamanhoArray);
  });

});

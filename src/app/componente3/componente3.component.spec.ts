import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3Component } from './componente3.component';

fdescribe('Componente3Component', () => {
  let component: Componente3Component;
  let fixture: ComponentFixture<Componente3Component>;
  let total = 0;

  beforeEach(() => {
    total += 10;

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
    component.removeItem('valor 1');
    component.removeItem('valor 4');

    expect(component.array.length).toBeLessThan(tamanhoArray);
  });

  it('deve verificar se item lasanha existe, caso não adicione', () => {
    let newString = 'lasanha';
    component.array.indexOf(newString) != -1
    component.insertStart(newString);
    
    expect(component.array).toContain(newString);
  });

  // ainda não funciona.
  it('deve lançar um erro se item não existir no array', () => {
    let array = ['dado 1', 'dado 2', 'dado 3']
    let item = 'valor 1';

    expect(component.itemExist(array, item)).toThrow();
  });

  it('Deve somar com mais 10 e retornar o total quando chamado', () => {
    total += 10;

    expect(total).toEqual(20);
  });

});

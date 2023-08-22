import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {

  array: string[] = ['valor 1', 'valor 2', 'valor 3'];

  insertStart(valor: string) {
    return this.array.unshift(valor);
  }

  removeItem(valor: string) {
    let index = this.array.indexOf(valor);
    if( index == -1 ) {
      this.array.splice(index, 1);
    }
    return this.array;
  }

  itemExist(array: string[], valor: string) {
    let index = array.indexOf(valor);

    if ( index !== -1 ) {
      return index;
    } else throw new Error("Valor não está contido no array.");
    
  }
}

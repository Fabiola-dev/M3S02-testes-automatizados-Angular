import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {

  /*   funcaoMedia(num1: number, num2: number, num3: number){
    let numbers = [num1, num2, num3];
    let sum = num1 + num2 + num3;
    let media = sum / numbers.length;  
    return media;
  } */

  calcularMedia(num1: number, num2: number, num3: number) {
    return (num1 + num2 + num3) / 3;
  };

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

  convertirArabigoRomano(numero: number) {
    let unidades = '';
    let decenas = '';
    let centenas = '';

    if (numero > 1000) {
      return 'El número ingresado debe ser menor o igual a 1000';
    }

    if (numero == 1000) {
      return 'M';
    }
    if (numero < 0) {
      return 'El número ingresado debe ser mayor a 0';
    }
    if (numero == 0) {
      return 'El número 0 no tiene representación Romana';
    }
    if ((numero - Math.floor(numero)) !== 0) {
      return 'El número ingresado no puede ser decimal';
    }


    if (numero >= 100) {
      let cen = Math.floor(numero / 100);
      centenas = this.convertirCentenas(cen);
      numero = numero % 100;

    }
    let dec = Math.floor(numero / 10);
    decenas = this.convertirDecenas(dec);
    numero = numero % 10;

    if (numero > 0) {
      unidades = this.convertirUnidades(numero);
    }

    let romano = `${centenas}${decenas}${unidades}`;
    return romano;

  }

  convertirUnidades(numero: number) {
    let unidades = '';
    switch (numero) {
      case 1:
        unidades = 'I';
        break;
      case 2:
        unidades = 'II';
        break;
      case 3:
        unidades = 'III';
        break;
      case 4:
        unidades = 'IV';
        break;
      case 5:
        unidades = 'V';
        break;
      case 6:
        unidades = 'VI';
        break;
      case 7:
        unidades = 'VII';
        break;
      case 8:
        unidades = 'VIII';
        break;
      case 9:
        unidades = 'IX';
        break;
    }

    return unidades;
  }

  convertirDecenas(numero: number) {
    let decenas = '';
    switch (numero) {
      case 1:
        decenas = 'X';
        break;
      case 2:
        decenas = 'XX';
        break;
      case 3:
        decenas = 'XXX';
        break;
      case 4:
        decenas = 'XL';
        break;
      case 5:
        decenas = 'L';
        break;
      case 6:
        decenas = 'LX';
        break;
      case 7:
        decenas = 'LXX';
        break;
      case 8:
        decenas = 'LXXX';
        break;
      case 9:
        decenas = 'XC';
        break;
    }
    return decenas;
  }


  convertirCentenas(numero: number) {
    let centenas = '';
    switch (numero) {
      case 1:
        centenas = 'C';
        break;
      case 2:
        centenas = 'CC';
        break;
      case 3:
        centenas = 'CCC';
        break;
      case 4:
        centenas = 'CD';
        break;
      case 5:
        centenas = 'D';
        break;
      case 6:
        centenas = 'DC';
        break;
      case 7:
        centenas = 'DCC';
        break;
      case 8:
        centenas = 'DCCC';
        break;
      case 9:
        centenas = 'CM';
        break;

    }
    return centenas;

  }

}

import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService} from '../../services/roman-numerals.service';


@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {

  constructor(private serviceRoman: RomanNumeralsService) { }
  romano: any;
  ngOnInit() {
  }

  convertirNumero(numero){
    this.romano = this.serviceRoman.convertirArabigoRomano(numero);
  }

  clean() {
    this.romano = '';
  }

}

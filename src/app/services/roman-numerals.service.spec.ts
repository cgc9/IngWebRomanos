import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;
  beforeAll(()=>{
    service = TestBed.inject(RomanNumeralsService);
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    let service: RomanNumeralsService = TestBed.get(RomanNumeralsService);
    expect(service).toBeTruthy();
  });

  it('convertir_el_0', () => {
    let res = service.convertirArabigoRomano(0);
    expect(res).toEqual('El número cero no es posible representarlo en notación romana');
  });
  it('convertir_decimal', () => {
    let res = service.convertirArabigoRomano(1.2);
    expect(res).toEqual('El número debe ser entero');
  });
  it('convertir_Mayor_Mil', () => {
    let res = service.convertirArabigoRomano(1500);
    expect(res).toEqual('El número ingresado debe ser menor o igual a 1000');
  });
  it('convertir_Menor_Cero', () => {
    let res = service.convertirArabigoRomano(-1);
    expect(res).toEqual('El número ingresado debe ser mayor a cero');
  });
  it('convertir_2', () => {
    let res = service.convertirArabigoRomano(2);
    expect(res).toEqual('II');
  });
  it('convertir_9', () => {
    let res = service.convertirArabigoRomano(9);
    expect(res).toEqual('IX');
  });
  it('convertir_17', () => {
    let res = service.convertirArabigoRomano(17);
    expect(res).toEqual('XVII');
  });
  it('convertir_29', () => {
    let res = service.convertirArabigoRomano(29);
    expect(res).toEqual('XXIX');
  });
  it('convertir_33', () => {
    let res = service.convertirArabigoRomano(33);
    expect(res).toEqual('XXXIII');
  });
  it('convertir_36', () => {
    let res = service.convertirArabigoRomano(36);
    expect(res).toEqual('XXXVI');
  });
  it('convertir_44', () => {
    let res = service.convertirArabigoRomano(44);
    expect(res).toEqual('XLIV');
  });
  it('convertir_54', () => {
    let res = service.convertirArabigoRomano(54);
    expect(res).toEqual('LIV');
  });
  it('convertir_99', () => {
    let res = service.convertirArabigoRomano(99);
    expect(res).toEqual('XCIX');
  });
  it('convertir_111', () => {
    let res = service.convertirArabigoRomano(111);
    expect(res).toEqual('CXI');
  });
  it('convertir_187', () => {
    let res = service.convertirArabigoRomano(187);
    expect(res).toEqual('CLXXXVII');
  });
  it('convertir_233', () => {
    let res = service.convertirArabigoRomano(233);
    expect(res).toEqual('CCXXIII');
  });
  it('convertir_797', () => {
    let res = service.convertirArabigoRomano(797);
    expect(res).toEqual('DDCCXCVII');
  });
  it('convertir_el_999', () => {
    let res = service.convertirArabigoRomano(999);
    expect(res).toEqual('CMXCIX');
  });
  it('convertir_el_1000', () => {
    let res = service.convertirArabigoRomano(1000);
    expect(res).toEqual('M');
  });

});

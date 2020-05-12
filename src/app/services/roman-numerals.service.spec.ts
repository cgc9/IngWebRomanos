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
    expect(service.convertirArabigoRomano(0)).toEqual('El número cero no es posible representarlo en notación romana');
  });
  it('convertir_decimal', () => {
    expect(service.convertirArabigoRomano(1.2)).toEqual('El número debe ser entero');
  });
  it('convertir_Mayor_Mil', () => {
    expect(service.convertirArabigoRomano(1500)).toEqual('El número ingresado debe ser menor o igual a 1000');
  });
  it('convertir_Menor_Cero', () => {
    expect(service.convertirArabigoRomano(-1)).toEqual('El número ingresado debe ser mayor a cero');
  });
  it('convertir_1', () => {
    expect(service.convertirArabigoRomano(1)).toEqual('I');
  });
  it('convertir_2', () => {
    expect(service.convertirArabigoRomano(2)).toEqual('II');
  });
  it('convertir_3', () => {
    expect(service.convertirArabigoRomano(3)).toEqual('III');
  });
  it('convertir_4', () => {
    expect(service.convertirArabigoRomano(4)).toEqual('IV');
  });
  it('convertir_5', () => {
    expect(service.convertirArabigoRomano(5)).toEqual('V');
  });
  it('convertir_6', () => {
    expect(service.convertirArabigoRomano(6)).toEqual('VI');
  });
  it('convertir_7', () => {
    expect(service.convertirArabigoRomano(7)).toEqual('VII');
  });
  it('convertir_8', () => {
    expect(service.convertirArabigoRomano(8)).toEqual('VIII');
  });
  it('convertir_9', () => {
    expect(service.convertirArabigoRomano(9)).toEqual('IX');
  });
  it('convertir_10', () => {
    expect(service.convertirArabigoRomano(10)).toEqual('X');
  });
  it('convertir_14', () => {
    expect(service.convertirArabigoRomano(14)).toEqual('XIV');
  });
  it('convertir_17', () => {
    expect(service.convertirArabigoRomano(17)).toEqual('XVII');
  });
  it('convertir_20', () => {
    expect(service.convertirArabigoRomano(20)).toEqual('XX');
  });
  it('convertir_27', () => {
    expect(service.convertirArabigoRomano(27)).toEqual('XXVII');
  });
  it('convertir_29', () => {
    expect(service.convertirArabigoRomano(29)).toEqual('XXIX');
  });
  it('convertir_33', () => {
    expect(service.convertirArabigoRomano(33)).toEqual('XXXIII');
  });
  it('convertir_36', () => {
    expect(service.convertirArabigoRomano(36)).toEqual('XXXVI');
  });
  it('convertir_44', () => {
    expect(service.convertirArabigoRomano(44)).toEqual('XLIV');
  });
  it('convertir_54', () => {
    expect( service.convertirArabigoRomano(54)).toEqual('LIV');
  });
  it('convertir_99', () => {
    expect(service.convertirArabigoRomano(99)).toEqual('XCIX');
  });
  it('convertir_111', () => {
    expect(service.convertirArabigoRomano(111)).toEqual('CXI');
  });
  it('convertir_187', () => {
    expect(service.convertirArabigoRomano(187)).toEqual('CLXXXVII');
  });
  it('convertir_223', () => {
    expect(service.convertirArabigoRomano(223)).toEqual('CCXXIII');
  });
  it('convertir_325', () => {
    expect(service.convertirArabigoRomano(325)).toEqual('CCCXXV');
  });
  it('convertir_797', () => {
    expect(service.convertirArabigoRomano(797)).toEqual('DCCXCVII');
  });
  it('convertir_el_999', () => {
    expect(service.convertirArabigoRomano(999)).toEqual('CMXCIX');
  });
  it('convertir_el_1000', () => {
    expect(service.convertirArabigoRomano(1000)).toEqual('M');
  });

});

import { Component, OnInit } from '@angular/core';
import { Gas } from '../../models/gas.model';

@Component({
  selector: 'app-convenio-gas',
  templateUrl: './convenio-gas.page.html',
  styleUrls: ['./convenio-gas.page.scss'],
})
export class ConvenioGasPage implements OnInit {

  total_5 = 0;
  total_11 = 0;
  total_15 = 0;
  total_45 = 0;
  total_total = 0;

  cantidad = 0;

  gas: Gas[] = new Array();



  constructor() {
    this.gas = [new Gas(8990, 0, 5), new Gas(11990, 0, 11), new Gas(16990, 0, 15), new Gas(39990, 0, 45)];

  }

  ngOnInit() {

  }
  /**CANTIDAD PARA GALONES ...HAY QUE HACER UN FOR */

  cantidad_mas_5() {

    this.cantidad = this.gas[0].cantidad++;
    this.valorTotal();
    this.total_cilindros();
    return this.gas[0].cantidad;
  }

  cantidad_mas_11() {

    this.cantidad = this.gas[1].cantidad++;
    this.valorTotal();
    this.total_cilindros();
    return this.gas[1].cantidad;
  }


  cantidad_mas_15() {

    this.cantidad = this.gas[2].cantidad++;
    this.valorTotal();
    this.total_cilindros();
    return this.gas[2].cantidad;
  }


  cantidad_mas_45() {

    this.cantidad = this.gas[3].cantidad++;
    this.valorTotal();
    this.total_cilindros();
    return this.gas[3].cantidad;
  }


  cantidad_menos_5() {
    if (this.gas[0].cantidad > 0) {
      this.cantidad = this.gas[0].cantidad--;
      this.valorTotal();
      return this.cantidad;
    } else if (this.gas[0].cantidad < 0) {
      this.gas[0].cantidad = 0;
    }

  }
  cantidad_menos_11() {
    if (this.gas[1].cantidad > 0) {
      this.cantidad = this.gas[1].cantidad--;
      this.valorTotal();
      return this.cantidad;
    } else if (this.gas[1].cantidad < 0) {
      this.gas[1].cantidad = 0;
    }
  }
  cantidad_menos_15() {
    if (this.gas[2].cantidad > 0) {
      this.cantidad = this.gas[2].cantidad--;
      this.valorTotal();
      return this.cantidad;
    } else if (this.gas[2].cantidad < 0) {
      this.gas[2].cantidad = 0;
    }
  }
  cantidad_menos_45() {
    if (this.gas[3].cantidad > 0) {
      this.cantidad = this.gas[3].cantidad--;
      this.valorTotal();
      return this.cantidad;
    } else if (this.gas[3].cantidad < 0) {
      this.gas[3].cantidad = 0;
    }
  }

  valorTotal() {


    this.total_5 = this.gas[0].valor * this.gas[0].cantidad;
    this.total_11 = this.gas[1].valor * this.gas[1].cantidad;
    this.total_15 = this.gas[2].valor * this.gas[2].cantidad;
    this.total_45 = this.gas[3].valor * this.gas[3].cantidad;
    this.total_total = this.total_11 + this.total_5 + this.total_15 + this.total_45;

    return this.total_total;

  }

  total_cilindros() {
    this.cantidad = this.gas[0].cantidad + this.gas[1].cantidad + this.gas[2].cantidad + this.gas[3].cantidad;
    return this.cantidad;

  }

}

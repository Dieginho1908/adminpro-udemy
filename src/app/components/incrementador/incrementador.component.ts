import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() porcentaje: number = 50;

  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress;
  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue ) {
    console.log(this.txtProgress.nativeElement.value);
    if (newValue >= 100) {
      this.txtProgress.nativeElement.value = 100;
    } else if (newValue <= 0) {
      this.txtProgress.nativeElement.value = 0;
    } else {
      this.txtProgress.nativeElement.value = newValue;
    }
    this.cambioValor.emit(this.txtProgress.nativeElement.value );
  }

  cambiarValor(valor) {
    if (this.porcentaje >= 100 ) {
      return;
    }
    if (this.porcentaje <=  0) {
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
  }

}

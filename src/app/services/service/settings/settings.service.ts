import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };


  constructor( @Inject (DOCUMENT) private _document) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes =  JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando del localStorage');
      this.aplicarTema(this.ajustes.tema);
    } else {
      // console.log('Usando valores por defecto');
    }
    
  }

  aplicarTema(tema: string){
    let url: string = 'assets/css/colors/';
    this._document.getElementById('tema').setAttribute('href', url + tema+'.css' );
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}



interface Ajustes {
  temaUrl: string;
  tema: string;
}

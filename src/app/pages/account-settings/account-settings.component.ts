import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
              private _serv: SettingsService) { }
  
  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    console.log(link);
    this.aplicarCheck(link);
    this._serv.aplicarTema(tema);
  }

  aplicarCheck(link) {
    let selector: any = document.getElementsByClassName('selector');

    for (let s of selector) {
      s.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selector: any = document.getElementsByClassName('selector');
    let temA = this._serv.ajustes.tema;
    for (let s of selector) {
      if ( s.getAttribute('data-theme') === temA){
        s.classList.add('working');
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor() {

    this.subs = this.observador().subscribe(numero => {
      console.log('Subs', numero);
    },
    error => console.error('Error', error),
    () => console.log('"Observador terminado"')
    );
   }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Página cerrada');
    this.subs.unsubscribe();
  }

  observador(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        observer.next( contador);

        // if( contador === 3){
        //   observer.complete();
        // }

      }, 1000);
    }).pipe(
      map( resp => {
        return resp;
      }),
      filter( (valor, index ) =>{
       
        if ( ( valor % 2) === 1){

          return true;
        }
        else{
          return false;
        }
        
      })
    );
  }
}

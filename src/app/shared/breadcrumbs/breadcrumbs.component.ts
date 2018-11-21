import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  ruta: string;
  constructor(public rutas: Router,
              private title: Title,
              private meta: Meta) {

    this.cargarBreadCrums()
    .subscribe(event => {
      this.ruta = event.titulo;
      this.title.setTitle(this.ruta) ;


      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.ruta
      };

      this.meta.updateTag(metaTag);
    });

    
   }

  ngOnInit() {
  }

  cargarBreadCrums() {
    return this.rutas.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}

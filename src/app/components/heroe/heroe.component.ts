import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService
    ) {

    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      //Asignamos a heroe el valor de la llamada al servicio de heroe
      //la variable id es la que se da en el app.routes.ts
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }



}

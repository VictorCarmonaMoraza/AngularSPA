import { IHeroe } from './../../Interfaces/IHeroe';
import { HeroesService } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  //En constructor se ejecuta antes que el ngOnInit
  constructor(private _heroesService: HeroesService) {
    console.log("Constructor inicializado")
   }

  ngOnInit(): void {
    console.log("ngOnInit inicializado");
    this.heroes = this._heroesService.getHeroes();
  }

}

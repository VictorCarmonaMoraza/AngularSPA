import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private _router:Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe() {
    // console.log(idx);
    //Redireccionamos
    // this._router.navigate(['/heroe', this.indice]);
    // console.log(this.indice);
    this.heroeSeleccionado.emit(this.indice);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino = '';

  heroes: Heroe[] = [];

  heroeSeleccionado!: Heroe;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }


  buscando(): void {
    this.heroesService.getSugerencias( this.termino.trim() )
        // tslint:disable-next-line: deprecation
        .subscribe( resp => this.heroes = resp);
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent  ): void{

    const heroe: Heroe = event.option.value;
    if (heroe) {

      this.termino = heroe.superhero;

      this.heroesService.getHeroe( heroe.id! )
                        .subscribe( heroe => this.heroeSeleccionado = heroe);
    }


  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  typesOfShoes: string[] = [
    `<li>
      <a routerLink="/auth/login">
          Ir a login
      </a> 
    </li>`,
    'Ir a registro',
    'Ir al listado de heroes',
    'Ir a Agregar heroe',
    'Ir Buscar heroe'];


  constructor() { }

  ngOnInit(): void {
  }

}

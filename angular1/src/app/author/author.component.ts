import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  lenguajes:Array<string>=["HTML","CSS", "JS", "TS", "ANGULAR"]
  imagen:string="mostrar"


  mostrar()
  {
    this.imagen="mostrar"
  }

  ocultar()
  {
    this.imagen="ocultar"
  }

}

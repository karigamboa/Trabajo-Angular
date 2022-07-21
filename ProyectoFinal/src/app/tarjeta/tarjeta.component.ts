import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})

export class TarjetaComponent {
  
  @Input() nombrejuego:string=''
  @Input() imagen:string=''
  @Input() idjuego:string=''

  constructor(private router:Router) {}

  irADetalles(){
    this.router.navigate(["detalles",this.idjuego])
  }
  
}


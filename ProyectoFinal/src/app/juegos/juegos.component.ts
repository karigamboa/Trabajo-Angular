import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
 informacion:any=""

  constructor(private servicio:ServiciosService) {
    servicio.getInfoJuegos().subscribe((data)=>(
      this.informacion=data))
   }

  ngOnInit(): void {
  }

}

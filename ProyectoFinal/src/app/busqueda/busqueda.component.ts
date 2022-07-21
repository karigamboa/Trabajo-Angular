import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  valorLink:string=""
  infoAPI:any=""

  constructor( private route:ActivatedRoute,private servicio:ServiciosService) {
    this.route.params.subscribe((data:any)=>
    {this.valorLink=data.id
     
      this.servicio.getInfoDetallada(this.valorLink).subscribe((info:any)=>
      {this.infoAPI=info})
    })
   }

  ngOnInit(): void {}

}

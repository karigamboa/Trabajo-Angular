import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  {
  valorDeRuta:string=''
  infoRecibida:any=''

@Input() juego:string=''
@Input() imagen:string=''
@Input() descripcion:string=''
@Input() logo:string=''


constructor(private route:ActivatedRoute,private servicio:ServiciosService){
  this.route.params.subscribe((data:any)=>{this.valorDeRuta=data.value
  this.servicio.getInfoExtra(this.valorDeRuta).subscribe((info:any)=>
  {this.infoRecibida=info
  console.log(this.infoRecibida)
})

})
}}

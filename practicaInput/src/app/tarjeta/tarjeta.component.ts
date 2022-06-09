import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent  {

  @Input() nombre:string=''
  @Input() edad:number=22   
  @Input() foto:string=''  
  @Input() numeroseguro:number=123456789
  

}

import { Component, OnInit } from '@angular/core';
import { InformativoService } from '../informativo.service';

@Component({
  selector: 'app-tarjetachuck',
  templateUrl: './tarjetachuck.component.html',
  styleUrls: ['./tarjetachuck.component.css']
})
export class TarjetachuckComponent implements OnInit {
  chiste:any=""
  constructor(private chuckservice:InformativoService) 
  {
    chuckservice.obtenerchistenorris().subscribe((data)=>
    {
      this.chiste=data
    })
 }

  ngOnInit(): void {
  }

}

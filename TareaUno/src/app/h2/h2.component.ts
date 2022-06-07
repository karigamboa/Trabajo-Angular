import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.component.html',
  styleUrls: ['./h2.component.css']
})
export class H2Component  {

  nombrebar:string="Ambiente"
  bebidas:Array<string>=["Cerveza","Coca Cola", "Limonada"]
  
  cambiarnombre()
  {
    this.nombrebar="Bar"
  }

  nombrenormal()
  {
    this.nombrebar="Ambiente"
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformativoService {
   constructor(private http:HttpClient) { }

   obtenerchistenorris()
   {
     return this.http.get("https://api.chucknorris.io/jokes/random")
   }

}



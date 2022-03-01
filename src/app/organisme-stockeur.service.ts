import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrganismeStockeurService {
  //public host:string="http://localhost:8888/REFCLI/api/refcli"
  constructor(private http:HttpClient) { }
  public getResource(url: any){
    return this.http.get(/*this.host+*/url);
    //console.log('host:::'+this.host+url);

  }
}

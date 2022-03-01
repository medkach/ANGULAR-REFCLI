import {Component, OnInit} from '@angular/core';
import {OrganismeStockeurService} from "./organisme-stockeur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public organismeStockeurs:any;
  public currentOrganisme:any;
  constructor(private organismeStockeurService:OrganismeStockeurService,private router:Router) {
  }
  ngOnInit(): void {
    this.getOrganismeStockeurs();
  }

  private getOrganismeStockeurs() {
   this.organismeStockeurService.getResource("http://localhost:8888/REFCLI/api/refcli/organismes")
   .subscribe(data => {
    this.organismeStockeurs=data;
  },error => console.log(error));
  }


  getCntresByIdorganisme(o:any) {
    this.currentOrganisme=o;
    this.router.navigateByUrl('centresByIdOrg/'+o.codOrgstkOrgstk);
  }
}

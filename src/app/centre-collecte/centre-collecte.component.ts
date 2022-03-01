import { Component, OnInit } from '@angular/core';
import {OrganismeStockeurService} from "../organisme-stockeur.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-centre-collecte',
  templateUrl: './centre-collecte.component.html',
  styleUrls: ['./centre-collecte.component.css']
})
export class CentreCollecteComponent implements OnInit {
  public idOrg: any;
  public centreCollectes: any;

  constructor(private orgService:OrganismeStockeurService,private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent) => {
      if(routerEvent instanceof NavigationEnd) {
        this.idOrg=this.route.snapshot.params['id'];
        this.centreCollectes=this.getCentreCollectes(this.idOrg);
      }
    });
  }

  private getCentreCollectes(idOrg:any) {
    this.orgService.getResource('http://localhost:8888/SAEB-AGR/api/saebagr/centres/byIdOrg/'+idOrg).
    subscribe(data =>{
      this.centreCollectes=data;
    },error => {console.log(error)});
  }
}

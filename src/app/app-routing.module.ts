import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CentreCollecteComponent} from "./centre-collecte/centre-collecte.component";

const routes: Routes = [
  {path:'',component:CentreCollecteComponent}
  ,{path:'centresByIdOrg/:id',component:CentreCollecteComponent}
  //, {path:'' ,redirectTo:'centres/:id' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliticasComponent } from './politicas/politicas.component';


const routes: Routes = [
  {
    path:"",redirectTo:"terminos",pathMatch:"full"
  },
  {
    path:"terminos", component:PoliticasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

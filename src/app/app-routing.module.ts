import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { ComparefirstComponent } from './pages/comparefirst/comparefirst.component';
import { ComparesecComponent } from './pages/comparesec/comparesec.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path:"products", component:ProductsComponent,
    children:[
      {path:"comparefirst/:id",component:ComparefirstComponent,},
      {path:"comparesec/:id",component:ComparesecComponent,},
      {path:"**",redirectTo:"comparesec",pathMatch:"full",}
    ]
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component:PagenotfoundComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

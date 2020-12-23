import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'; 
// this shit is needed for our manually created module

import { ProductsComponent } from './products/products.component';
import { ComparefirstComponent } from './comparefirst/comparefirst.component';
import { ComparesecComponent } from './comparesec/comparesec.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [ProductsComponent, ComparefirstComponent, ComparesecComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    RouterModule // <<--- and this shit too
  ],
  exports: [
    ProductsComponent,
    ComparefirstComponent,
    ComparesecComponent,
    PagenotfoundComponent
  ]
})
export class PagesModule { }

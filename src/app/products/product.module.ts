import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { StoreModule } from '@ngrx/store';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    // Initialize our store for product feature module, takes a name
    // for feature slice and a reducer, since no reducer we put an empty object
  StoreModule.forFeature('products', {})  
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }

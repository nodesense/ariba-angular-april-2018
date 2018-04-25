import { ProductService } from './services/product.service';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

import {FormsModule, ReactiveFormsModule} 
                          from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list',  // http://localhost:4200/products/list
        component: ProductListComponent
      },

      {
        path: 'create',
        component: ProductEditComponent
      },
      {
        path: 'edit/:id', // products/edit/1234466
        component: ProductEditComponent
      },

      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    RouterModule.forChild(routes)
  ],
  declarations: [
                ProductHomeComponent, 
                ProductListComponent, 
                ProductEditComponent, 
                ProductSearchComponent],

  providers: [
    // module level providers are singleton
    ProductService
  ]
})
export class ProductModule { }

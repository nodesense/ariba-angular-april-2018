import { Observable } from 'rxjs/Observable';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, 
        Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // new Product() for create product
  // elvis ?. shall not work ngModel
  product: Product = new Product(); 

  // for async pipe
  // Observable/promises, to have $ in suffix
  brands$: Observable<Brand[]>;


  constructor(private route: ActivatedRoute,
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    // read :id from the url
    const id = this.route.snapshot.params['id'];
    console.log("ID is ", id);
    if (id) {
      // edit 
      this.productService.getProduct(id)
          .subscribe (product => {
            this.product = product;
          })
    }

    // subscribe, unsubscribe done by async pipe
    this.brands$ = this.productService.getBrands();


  }

  homepage() {
    this.router.navigateByUrl("/");
  }

  listpage() {
    // merge array with /
    this.router
    .navigate(['/products', 'list', {source: 'edit-page'}])
  }

  saveProduct() {
    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
            // option 1: continue in form
            this.product = savedProduct;

            // option 2: go to list page
            this.listpage();
        });
  }

}

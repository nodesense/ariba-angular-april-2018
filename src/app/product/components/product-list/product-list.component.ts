import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  // Inject a service into constructor
  constructor(private productService: ProductService) {
    console.log("Product List comp created");
   }

  ngOnInit() {
    this.productService
        .getProducts()
        .subscribe( products => {
           console.log("Got products ", products);
           this.products = products;
        });
  }

}

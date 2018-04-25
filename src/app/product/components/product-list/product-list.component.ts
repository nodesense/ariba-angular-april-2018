import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];


  fields: string[] = ['year', 'price', 'weight'];
  predicates: string[] = ['>', '<', '=='];

  // data binding/two way
  selectedField: string;
  selectedPredicate: string;
  expectedValue: any;

  subscription: Subscription;

  // Inject a service into constructor
  constructor(private productService: ProductService, 
              private route: ActivatedRoute  
  ) {
    console.log("Product List comp created");
   }

  ngOnInit() {

    const source = this.route.snapshot.params['source'];
    console.log("Coming from ", source);

   this.subscription =  this.productService
        .getProducts()
        .subscribe( products => {
           console.log("Got products ", products);
           this.products = products;
        });
  }

  ngOnDestroy() {
    // if !this.subscription.closed
    this.subscription.unsubscribe();
  }

}

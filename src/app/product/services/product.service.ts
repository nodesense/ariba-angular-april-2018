import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  // inject http client into product service
  constructor(private http: HttpClient) {
     console.log("Product Service created");
   }

   getProducts():Observable<Product[]> {
     return this.http
     .get<Product[]>('http://localhost:7070/api/products')
   }

}

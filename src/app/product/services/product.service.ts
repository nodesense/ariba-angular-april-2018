import { Brand } from './../models/brand';
import { environment } 
    from './../../../environments/environment';

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


   // GET /api/products
   getProducts():Observable<Product[]> {
     return this.http
     .get<Product[]>(`${environment.apiEndPoint}/api/products`)
   }


   // GET /api/brands
   getBrands():Observable<Brand[]> {
    return this.http
    .get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
  }

 // GET /api/products/12345
  getProduct(id: number):Observable<Product> {
    return this.http
    .get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
  }


  // To update
  // PUT /api/products/345
  // data

  // to create
  // POST /api/products
  // data

  saveProduct(product: Product):Observable<Product> {
    if (product.id){
      return this.http
             .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, 
                          product);
    } else {
      // post 
      return this.http
      .post<Product>(`${environment.apiEndPoint}/api/products`, 
                   product);
    }

  }

}

import { Observable } from 'rxjs/Observable';
 import { ProductService } from './../../services/product.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './../../../shared/pipes/filter.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product';

import "rxjs/Rx";

class ProductMockService {
  getProducts(): Observable<Product[]> {
    console.log("called mock get products")
      return Observable.of(<Product[]> [
        {id: 1, name: "P1"}
      ])
  }
}
 
fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterModule.forRoot([]),
          FormsModule,
          HttpClientModule

      ],
      declarations: [ 
        ProductListComponent,
        FilterPipe
       ],

       providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: ProductService,
          useClass: ProductMockService
        }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    let     element = fixture.nativeElement;
    expect(element.querySelectorAll('tr').length).toBe(2);

  });
});

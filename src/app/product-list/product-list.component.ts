import {Component, OnInit} from '@angular/core';
import {AppState} from '../store';
import {NgRedux} from '@angular-redux/store';
import {ProductActions} from '../product.actions';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {Product} from '../entities/product';

@Component({
  selector: 'app-display-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  userSearch: string;
  isAdmin$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<AppState>, private productActions: ProductActions, private productService: ProductService) {
  }
  ngOnInit() {
    this.isLoading$ = new Observable(subscriber => {
      subscriber.next(true);

      this.products$ = this.productService.getProducts();

      setTimeout(()=>{
        subscriber.next(false);
      }, 2000)
    });
    // create an observable for the isAdmin field
    this.isAdmin$ = this.ngRedux.select(state => state.products.isAdmin);
  }
}


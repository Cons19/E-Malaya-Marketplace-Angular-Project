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
  isLoading: boolean;
  userSearch: string;
  isAdmin: boolean;

  constructor(private ngRedux: NgRedux<AppState>, private productActions: ProductActions, private productService: ProductService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();

    this.ngRedux.select(state => state.products).subscribe(res => {
      this.isAdmin = res.isAdmin;
    });

  }
}


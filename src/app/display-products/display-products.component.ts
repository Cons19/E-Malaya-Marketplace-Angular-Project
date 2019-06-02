import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product';
import { AppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { ProductActions } from '../product.actions';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  products: Product[];
  isLoading: boolean;
  userSearch: string;

  constructor(private ngRedux: NgRedux<AppState>, private productActions: ProductActions) { }

  ngOnInit() {
    // Subscribe to the redux store (products).
    this.ngRedux.select(state => state.products).subscribe(result => {
      this.products = result.products;
    });
    // this.quizzes = this.data.quizzes;
  }
  handleProductClicked(product: Product) : void {
    // handle the event.
    console.log(this.userSearch);
    console.log(product);
  }
}


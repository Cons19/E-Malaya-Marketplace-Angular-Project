
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productInput: Product;
  @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>(); 

  constructor() { }

  ngOnInit() {
  }
  
  emitProductClicked() {
    this.productClicked.emit(this.productInput);
  }
}

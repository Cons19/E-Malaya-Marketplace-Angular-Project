import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductActions } from '../product.actions';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product';
import { productReducer } from '../product.reducer';

@Component({
  selector: 'app-update-product',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  updateProduct: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, private productActions: ProductActions, private productService: ProductService,
    private route: ActivatedRoute, private tempData: ProductService,) { }

  saveUpdatedProduct() {

    let product = this.updateProduct.value as Product;
    // Get the id from the url
    

    this.productService.updateProduct(product);
    this.router.navigate(['../portal/product-list']);
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.tempData.getProduct(id);
    this.updateProduct = this.fb.group({
      _id: id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
      
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {Router} from '@angular/router';
import {AppActions} from '../app.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-product',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, private data: ProductService,
              private router: Router, private productActions: AppActions, private productService: ProductService) {
  }

  saveProduct() {
    let product = this.product.value as Product;

    this.productService.addProduct(product)
      .then(() => {
        console.log("product added!");
        this.product.reset();
        this.snackBar.open('Product added', "", {duration: 500}).afterDismissed().subscribe(() => {
          this.router.navigate(['../portal/product-list']);
        });
      });
  }

  ngOnInit() {
    this.product = this.fb.group({
      _id: [''],
      name: [''],
      description: [''],
      price: []
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AppActions} from '../app.actions';
import {ProductService} from '../services/product.service';
import {Product} from '../entities/product';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-update-product',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})

export class ProductUpdateComponent implements OnInit {
  product: Observable<Product>;
  productForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, private router: Router,
              private productActions: AppActions, private productService: ProductService,
              private route: ActivatedRoute) {
  }

  updateProduct() {
    let product = this.productForm.value as Product;

    this.productService.updateProduct(product)
      .then(() => {
        console.log('product updated!');
        this.snackBar.open('Product updated', '', {duration: 500}).afterDismissed().subscribe(() => {
          this.router.navigate(['../portal/product-list']);
        });
      });
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      _id: [''],
      name: [''],
      description: [''],
      price: [''] // []  for number ???
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(id);
  }
}

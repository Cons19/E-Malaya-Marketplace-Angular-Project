import {Component, OnInit} from '@angular/core';
import {Product} from '../entities/product';
import {Router} from '@angular/router';
import {ProductActions} from '../product.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../services/product.service';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  createProduct: FormGroup;
  // createProduct: Form;

  constructor(private fb: FormBuilder, private data: ProductService,
    private router: Router, private productActions: ProductActions) { }

  saveProduct() {
    // save a user who created this quiz.
    // hardcode a user until we have a proper login.
    let product = this.createProduct.value as Product;
    product._id = '5'
    // product.price.value = this.createProduct.price;
    product.price.currency = 'DKK';

    this.productActions.createProduct(product);
    // this.data.saveProduct(product);
    this.router.navigate(['../portal/display-products']);
  }

  ngOnInit() {
    this.createProduct = this.fb.group({
      _id: [''],
      name: [''],
      description: [''],
      price: {
        value: [''],
      }
      // price: this.fb.array({
      //   value: [''],
      // }),
    })
  }
}

// product = {
    //   _id: '5', 
    //   name: 'Default Title',
    //   user: {
    //     _id: '1',
    //     firstName: 'Paul',
    //     lastName: 'Panaitescu',
    //     email: 'paul@gmail.com',
    //     password: 'pass',
    //     gender: Gender.Male,
    //     birthDate: new Date(2019, 0, 3),
    //     phone: 1234567899,
    //     address: 'CPH'
    //   },
    //   description: 'Default Descpription',
    //   price: {
    //     value: 100,
    //     currency: 'DKK',
    //   },
    // }

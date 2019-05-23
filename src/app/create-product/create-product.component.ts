import { Component, OnInit } from '@angular/core';
import { Product, Price } from '../entities/product';
import { Router } from '@angular/router';
import { ProductActions } from '../product.actions';
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';
import { Gender } from '../entities/user';
import { TempDataService } from '../service/temp-data.service';
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

  constructor(private fb: FormBuilder, private data: TempDataService,
    private router: Router, private productActions: ProductActions) { }

  saveProduct() {
    // save a user who created this quiz.
    // hardcode a user until we have a proper login.
    let product = this.createProduct.value as Product;
    product._id = '5';
    product.user = {  // Hardcoded. We remove when we have a proper login
      _id: '3',
      firstName: 'Paul 7',
      lastName: 'Panaitescu',
      email: 'paul@gmail.com',
      password: 'pass',
      gender: Gender.Male,
      birthDate: new Date(2019, 1, 6),
      phone: 1234567899,
      address: 'CPH',
    };
    product.price.currency = 'DKK';

    this.productActions.createProduct(product);
    // this.data.saveProduct(product);
    this.router.navigate(['/display-products']);
  }

  ngOnInit() {
    this.createProduct = this.fb.group({
      _id: [''],
      name: [''],
      // user: [''],
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../admin/admin.service';
import { ProductActions } from '../product.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private adminService: AdminService, private productActions: ProductActions) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]] 
      }
    )
  }

  onSubmit() {
    console.log(this.loginForm);
    
    if(this.loginForm.valid) {
      this.productActions.setLoggedIn(true);
      if(this.loginForm.value.email === 'admin@admin' && this.loginForm.value.password === 'admin123') {
        console.log("First");
        this.adminService.login().subscribe(result => {
        console.log("Third");
        this.router.navigate(['portal/create-product']);
        });
        console.log("Second");
      }
      else {
        console.log("First");
        this.authService.login().subscribe(result => {
          console.log("Third");
          this.router.navigate(['portal/display-products']);
        });
        console.log("Second");
      }
    }
    else {

    }
  }

}

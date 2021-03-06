import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {AdminService} from '../admin/admin.service';
import {ProductActions} from '../product.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private adminService: AdminService, private productActions: ProductActions) {
  }

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
    if (this.loginForm.valid) {

      this.authService.login().subscribe(result => {
        this.productActions.setLoggedIn(true);

        if (this.loginForm.value.email === 'admin@admin' && this.loginForm.value.password === 'admin123') {
          console.log('logging as admin');

          this.adminService.login().subscribe(result => {
            this.productActions.setAdmin(true);

            this.router.navigate(['portal/product-list']);
          });

        } else {
          console.log('logging as user');
          this.router.navigate(['portal/product-list']);
        }
      });
    } else {
      console.log("Invalid form");
    }
  }
}

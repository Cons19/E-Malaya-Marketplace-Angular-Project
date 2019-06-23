import {Component, OnInit} from '@angular/core';
import {ProductActions} from '../product.actions';
import {AuthService} from "../auth/auth.service";
import {AdminService} from "../admin/admin.service";
import {NgRedux} from "@angular-redux/store";
import {AppState} from "../store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  isAdmin$: Observable<boolean>;

  constructor(private productActions: ProductActions, private authService: AuthService, private adminService: AdminService, private ngRedux: NgRedux<AppState>) {
    this.isAdmin$ = this.ngRedux.select(state => state.products.isAdmin);
  }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.adminService.logout();
    this.productActions.setLoggedIn(false);
    this.productActions.setAdmin(false);
  }
}

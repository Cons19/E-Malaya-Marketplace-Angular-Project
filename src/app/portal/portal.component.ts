import {Component, OnInit} from '@angular/core';
import {ProductActions} from '../product.actions';
import {AuthService} from "../auth/auth.service";
import {AdminService} from "../admin/admin.service";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private productActions: ProductActions, private authService: AuthService, private adminService: AdminService) {
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

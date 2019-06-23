import { Component, OnInit } from '@angular/core';
import { ProductActions } from '../product.actions';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private productActions: ProductActions) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.productActions.setLoggedIn(false);
    this.productActions.setAdmin(false);
  }
}

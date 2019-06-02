import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DisplayProductsComponent} from './display-products/display-products.component';
import {DisplayProductComponent} from './display-product/display-product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {
  MatCheckboxModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PortalComponent} from './portal/portal.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {AppState, rootReducer} from './store';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductPipe} from './product.pipe';
import {CartItemComponent} from './cart-item/cart-item.component';
import {ProductService} from './services/product.service';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DisplayProductsComponent,
    DisplayProductComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    CreateProductComponent,
    ProductComponent,
    ProductPipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortalComponent,
    CartItemComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSelectModule,
    NgReduxModule, NgReduxRouterModule.forRoot(), BrowserAnimationsModule,
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatSnackBarModule, MatCardModule, MatDividerModule, MatExpansionModule, MatCheckboxModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter, ) {
    // this.ngRedux.configureStore(rootReducer, {});
    this.ngRedux.configureStore(rootReducer, {}, [], [devTool.isEnabled() ? devTool.enhancer() : f => f]);
    ngReduxRouter.initialize(/* args */);
  }
}

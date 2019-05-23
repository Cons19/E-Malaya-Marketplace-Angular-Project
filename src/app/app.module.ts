import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSnackBarModule, MatExpansionModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState, rootReducer } from './store';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductPipe } from './product.pipe';


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
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDividerModule, MatExpansionModule, MatCheckboxModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
    // this.ngRedux.configureStore(rootReducer, {});
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);
     ngReduxRouter.initialize(/* args */);  
  }
}

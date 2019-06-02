import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { AuthGuard } from './auth/auth.guard';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
  ]},
  
  { path: 'portal', component: PortalComponent, children: [
    { path: 'display-products', component: DisplayProductsComponent, /*canActivate: [AuthGuard]*/},
    { path: 'display-product/:id', component:DisplayProductComponent},
    { path: 'create-product', component: CreateProductComponent, canActivate: [AdminGuard]},

    { path: 'cart', component: ShoppingCartComponent},
  ]},
  
  { path: '**', component: PageNotFoundComponent }  // wildcard - if no routes matched display this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

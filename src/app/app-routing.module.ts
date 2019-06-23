import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {RegisterComponent} from './register/register.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {HomeComponent} from './home/home.component';
import {PortalComponent} from './portal/portal.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import { AdminGuard } from './admin/admin.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
  ]},
  
  { path: 'portal', component: PortalComponent, children: [
    { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
    { path: 'product-detail/:id', component:ProductDetailComponent, canActivate: [AuthGuard] },
    { path: 'product-update/:id', component:ProductUpdateComponent, canActivate: [AdminGuard] },
    { path: 'product-create', component: ProductCreateComponent, canActivate: [AdminGuard] },
    { path: 'cart', component: CartDetailComponent, canActivate: [AuthGuard]},
  ]},
  
  { path: '**', component: PageNotFoundComponent }  // wildcard - if no routes matched display this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

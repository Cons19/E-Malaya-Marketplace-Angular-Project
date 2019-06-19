import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // isLoggedIn: boolean = false;
  isLoggedIn: boolean;

  redirectUrl: string;
  
  login(): Observable<boolean> {
    // here, we want to call a webservice to log in
    
    console.log(" login this.isLoggedIn " + this.isLoggedIn)
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
    

  }
  
  logout(): void {
    console.log(" logout this.isLoggedIn " + this.isLoggedIn)

    this.isLoggedIn = false;
  }
}

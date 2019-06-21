import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './store';

@Injectable({providedIn: 'root'})
export class AppActions {
  static LOG_IN: string = 'LOG_IN';
  static ADMIN: string = 'ADMIN';

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  setLoggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    this.ngRedux.dispatch({
      type: AppActions.LOG_IN,
      payload: isLoggedIn
    });
  }

  setAdmin(isAdmin: boolean): void {
    console.log(isAdmin);
    this.ngRedux.dispatch({
      type: AppActions.ADMIN,
      payload: isAdmin
    })
  }
}

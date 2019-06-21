import {AppState} from './store';
import {tassign} from 'tassign';
import {AppActions} from './app.actions';

export const INITIAL_STATE: AppState = {
  isLoggedIn: false, isAdmin: false
};

export function appReducer(state: AppState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case AppActions.LOG_IN:
      return tassign(state, {isLoggedIn: action.payload});
    case AppActions.ADMIN:
      return tassign(state, {isAdmin: action.payload});
    default:
      return state;
  }
}

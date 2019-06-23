import {AppActions} from './app.actions';
import {appReducer} from './app.reducer';

var deepFreeze = require('deep-freeze');

describe('Product reducer tests', () => {
  // each it block is a test case.
  it('should set isLoggedIn to true after Logging In', () => {
    // 1.Arrange  2.Act  3.Assert
    // 1.Arrange
    let startState = {isLoggedIn: undefined, isAdmin: undefined};
    deepFreeze(startState);
    let actionObj = {type: AppActions.LOG_IN, payload: true};
    // 2.Act
    let newStateObj = appReducer(startState, actionObj);
    // 3.Assert (expect)
    expect(newStateObj).toEqual({isLoggedIn: true, isAdmin: undefined});
  });

  it('should set isLoggedIn to false after Logging Out', () => {
    // 1.Arrange  2.Act  3.Assert
    // 1.Arrange
    let startState = {isLoggedIn: undefined, isAdmin: undefined};
    deepFreeze(startState);
    let actionObj = {type: AppActions.LOG_IN, payload: false};
    // 2.Act
    let newStateObj = appReducer(startState, actionObj);
    // 3.Assert (expect)
    expect(newStateObj).toEqual({isLoggedIn: false, isAdmin: undefined});
  });
});

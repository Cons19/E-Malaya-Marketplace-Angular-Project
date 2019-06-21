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

  // it('should create a new Product', () => {
  //   // 1.Arrange  2.Act  3.Assert
  //   // 1.Arrange
  //   let startState = {products: []} as ProductState;
  //   deepFreeze(startState);
  //   let product = { _id: '15',
  //                   name: 'Test Product',
  //                   description: 'Test Descpription',
  //                   price: {
  //                       value: 129,
  //                       currency: 'EUR'
  //                       }
  //                   } as Product;
  //   let actionObj = { type: AppActions.CREATE_PRODUCT, payload: product };
  //   // 2.Act
  //   let newStateObj = appReducer(startState, actionObj);
  //   // 3.Assert (expect)
  //   // expect(newStateObj.products.length).toBe(1);
  //   expect(newStateObj.products[0]._id).toBe('15');
  //   expect(newStateObj.products[0].name).toBe('Test Product');
  //   expect(newStateObj.products[0].description).toBe('Test Descpription');
  //   expect(newStateObj.products[0].price.value).toBe(129);
  //   expect(newStateObj.products[0].price.currency).toBe('EUR');
  // });
});

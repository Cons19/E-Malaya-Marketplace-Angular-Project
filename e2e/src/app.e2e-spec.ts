import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  }); 

  // it('1.0: should have the login name on login component', () => {
  //   browser.get('../home/login');
  //   let loginText = element(by.id('login')).getText();

  //   browser.sleep(1000); // sleep to 100 miliseconds
  //   expect(loginText).toEqual("Login");
  // });

  // it('2.0: should login with email and password as an user, then show the product-list page', () => {
  //   browser.get('../home/login');
  //   element(by.id('email')).sendKeys('user@user.com');
  //   browser.sleep(1000); // sleep to 100 miliseconds
  //   element(by.id('password')).sendKeys('pass123');
  //   browser.sleep(1000); // sleep to 100 miliseconds
  //   element(by.id('loginButton')).click();undefined
  //   browser.sleep(1000); // sleep to 100 miliseconds
    
  //   // Cleaner way to check that you are in the right place.
  //   expect(browser.getCurrentUrl()).toContain('/portal/product-list');
  //   browser.sleep(1000); // sleep to 100 miliseconds
  // });

  // it('3.0: should register with credentials, then show the login page', () => {
  //   browser.get('../home/register');
  //   element(by.id('firstName')).sendKeys('John');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('lastName')).sendKeys('Snow');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('email')).sendKeys('john.snow@gmail.com');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('password')).sendKeys('pass12345');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('confirmPassword')).sendKeys('pass12345');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('gender')).sendKeys('Male');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('birthDate')).sendKeys('15/06/2019');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('phoneNumber')).sendKeys('12345678');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('address')).sendKeys('Winterfell');
  //   browser.sleep(200); // sleep to 100 miliseconds

  //   element(by.id('registerButton')).click();
  //   browser.sleep(200); // sleep to 100 miliseconds
    
  //   // Cleaner way to check that you are in the right place.
  //   expect(browser.getCurrentUrl()).toContain('/home/login');
  //   browser.sleep(1000); // sleep to 100 miliseconds

  // });

  it('4.0: should login as admin, then create a product', async() => {
    
    browser.get('../home/login');
    element(by.id('email')).sendKeys('admin@admin');
    browser.sleep(1000); // sleep to 100 miliseconds
    element(by.id('password')).sendKeys('admin123');
    browser.sleep(1000); // sleep to 100 miliseconds
    element(by.id('loginButton')).click();
    browser.sleep(1000); // sleep to 100 miliseconds
    
    expect(browser.getCurrentUrl()).toContain('/portal/product-list');
    browser.sleep(1000); // sleep to 100 miliseconds

    element(by.id('createButton')).click();
    browser.sleep(1000); // sleep to 100 miliseconds

    expect(browser.getCurrentUrl()).toContain('/portal/product-create');

    element(by.id('name')).sendKeys('Title of the product 1');
    browser.sleep(1000); // sleep to 100 miliseconds
    element(by.id('description')).sendKeys('Description of the product 1');
    browser.sleep(1000); // sleep to 100 miliseconds
    element(by.id('price')).sendKeys('153');
    browser.sleep(1000); // sleep to 100 miliseconds

    element(by.id('saveButton')).click();
    browser.sleep(1000); // sleep to 100 miliseconds

    expect(browser.getCurrentUrl()).toContain('/portal/product-list');
    browser.sleep(1000); // sleep to 100 miliseconds

    // verify if the last product was added (name, desc, price)
    let productElem = element.all(by.css(".product")).last()
    let productItemName = productElem.element(by.css(".name")).getText()
    let productItemDesc = productElem.element(by.css(".description")).getText()
    let productItemPrice = productElem.element(by.css(".price")).getText()

    expect(productItemName).toEqual('Title of the product 1');
    expect(productItemDesc).toEqual('Description: Description of the product 1');
    expect(productItemPrice).toEqual('Price: 153');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

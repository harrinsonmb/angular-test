import { AppPage } from './app.po';
import {browser} from "protractor";

describe('angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should display 'Login page' title`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login page');
  });

  it(`should display 'Home page' title on login`, () => {
    page.navigateTo();
    let userName = page.getElement('#userName');
    userName.sendKeys('user');
    let password = page.getElement('#password');
    password.sendKeys('pass');
    let submit = page.getElement('#submit');
    submit.click();
    browser.waitForAngular();
    expect(page.getParagraphText()).toEqual('Home page');
  });
});

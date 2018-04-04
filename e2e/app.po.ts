import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path:string='/') {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElement(selector){
    return element(by.css(selector));
  }

  getElements(selector){
    return element.all(by.css(selector));
  }
}

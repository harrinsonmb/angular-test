import { AppPage } from '../../app.po';

describe('Home test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display 10 profiles', () => {
    page.navigateTo();
    let profiles = page.getElements('.list--profiles .list__item');
    expect(profiles.count()).toEqual(10);
  });

  it('should display 9 profiles if elementsNumber equal to 9', () => {
    page.navigateTo();
    let elementsNumber = page.getElement('#elementsNumber');
    elementsNumber.clear();
    elementsNumber.sendKeys(9);
    let profiles = page.getElements('.list--profiles .list__item');
    expect(profiles.count()).toEqual(9);
  });
});

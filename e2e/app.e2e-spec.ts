import { AppPage } from './app.po';

describe('angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home page');
  });
});

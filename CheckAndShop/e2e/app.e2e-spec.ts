import { CheckAndShopPage } from './app.po';

describe('check-and-shop App', function() {
  let page: CheckAndShopPage;

  beforeEach(() => {
    page = new CheckAndShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

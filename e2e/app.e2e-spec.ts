import { Angular2PracPage } from './app.po';

describe('angular2-prac App', () => {
  let page: Angular2PracPage;

  beforeEach(() => {
    page = new Angular2PracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

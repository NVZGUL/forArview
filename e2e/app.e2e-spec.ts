import { TomskPage } from './app.po';

describe('tomsk App', () => {
  let page: TomskPage;

  beforeEach(() => {
    page = new TomskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

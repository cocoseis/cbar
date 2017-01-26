import { CocoseisPage } from './app.po';

describe('cocoseis App', function() {
  let page: CocoseisPage;

  beforeEach(() => {
    page = new CocoseisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

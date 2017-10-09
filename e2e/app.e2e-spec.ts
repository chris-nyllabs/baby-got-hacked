import { BabyGotHackedPage } from './app.po';

describe('baby-got-hacked App', () => {
  let page: BabyGotHackedPage;

  beforeEach(() => {
    page = new BabyGotHackedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

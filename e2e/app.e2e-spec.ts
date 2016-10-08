import { DublinBikeAppPage } from './app.po';

describe('dublin-bike-app App', function() {
  let page: DublinBikeAppPage;

  beforeEach(() => {
    page = new DublinBikeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

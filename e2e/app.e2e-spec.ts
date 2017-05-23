import { HwOnePage } from './app.po';

describe('hw-one App', () => {
  let page: HwOnePage;

  beforeEach(() => {
    page = new HwOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { EcoleAngular2Page } from './app.po';

describe('ecole-angular-2 App', function() {
  let page: EcoleAngular2Page;

  beforeEach(() => {
    page = new EcoleAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

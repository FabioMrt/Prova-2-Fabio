import { Prova2Page } from './app.po';

describe('prova2 App', function() {
  let page: Prova2Page;

  beforeEach(() => {
    page = new Prova2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

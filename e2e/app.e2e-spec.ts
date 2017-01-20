import { EduardoSutilPage } from './app.po';

describe('eduardo-sutil App', function() {
  let page: EduardoSutilPage;

  beforeEach(() => {
    page = new EduardoSutilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

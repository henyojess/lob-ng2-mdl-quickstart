import { LobNg2MdlFrontendPage } from './app.po';

describe('lob-ng2-mdl-frontend App', function() {
  let page: LobNg2MdlFrontendPage;

  beforeEach(() => {
    page = new LobNg2MdlFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

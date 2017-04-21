import { PaintTheGlobeStravaPage } from './app.po';

describe('paint-the-globe-strava App', () => {
  let page: PaintTheGlobeStravaPage;

  beforeEach(() => {
    page = new PaintTheGlobeStravaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

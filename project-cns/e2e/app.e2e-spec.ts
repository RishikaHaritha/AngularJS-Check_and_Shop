import { ProjectCnsPage } from './app.po';

describe('project-cns App', () => {
  let page: ProjectCnsPage;

  beforeEach(() => {
    page = new ProjectCnsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

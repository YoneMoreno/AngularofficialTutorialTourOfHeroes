import {DashboardComponent} from './dashboard.component';
import {MyHeroService} from '../my-hero.service';
import {MessageService} from '../message.service';

describe('getHeroes', () => {
  it('should return 4 top heroes, from 1 to 5', () => {
    const messages: string[] = [];
    const dashboard = new DashboardComponent(new MyHeroService(new MessageService(messages)));

    dashboard.getHeroes();

    expect(dashboard.getArrayOfHeroes().length).toBe(4);
  });
});
describe('ngOnInit in dashboard', () => {
  it('should call getHeroes()', () => {
    const messages: string[] = [];
    const dashboard = new DashboardComponent(new MyHeroService(new MessageService(messages)));
    spyOn(dashboard, 'getHeroes');

    dashboard.ngOnInit();

    expect(dashboard.getHeroes).toHaveBeenCalled();
  });
});

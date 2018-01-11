import {HeroesComponent} from './heroes.component';
import {MyHeroService} from '../hero-service/my-hero.service';
import {MessageService} from '../message.service';
import {HEROES} from '../mock-heroes';

describe('heroesComponent', () => {
  it('should call getHeroes when executing ngOnInit when created', () => {
    const heroesComponent = new HeroesComponent(new MyHeroService(new MessageService([])));
    spyOn(heroesComponent, 'getHeroes');

    heroesComponent.ngOnInit();

    expect(heroesComponent.getHeroes).toHaveBeenCalled();
  });
  it('should get heroes', () => {
    const heroesComponent = new HeroesComponent(new MyHeroService(new MessageService([])));

    heroesComponent.getHeroes();

    expect(heroesComponent.heroes.length).toBeGreaterThan(0);
    expect(heroesComponent.heroes).toEqual(HEROES);
  });
});

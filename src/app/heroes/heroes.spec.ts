import {HeroesComponent} from './heroes.component';
import {MyHeroService} from '../hero-service/my-hero.service';
import {MessageService} from '../message.service';

describe('heroesComponent', () => {
  it('should call getHeroes when executing ngOnInit when created', () => {
    const heroesComponent = new HeroesComponent(new MyHeroService(new MessageService([])));
    spyOn(heroesComponent, 'getHeroes');

    heroesComponent.ngOnInit();

    expect(heroesComponent.getHeroes).toHaveBeenCalled();
  });
});

import {HeroDetailsComponent} from './hero-details.component';
import {ActivatedRoute} from '@angular/router';
import {MyHeroService} from '../hero-service/my-hero.service';
import {MessageService} from '../message.service';
import {Location} from '@angular/common';
import {provideLocationStrategy} from '@angular/router/src/router_module';
import {BrowserPlatformLocation} from '@angular/platform-browser/src/browser/location/browser_platform_location';


describe('heroDetails', () => {
  it('should call getHero after being created', () => {
    const heroDetailsComponent = new HeroDetailsComponent(new ActivatedRoute(),
      new MyHeroService(new MessageService([])),
      new Location(provideLocationStrategy(new BrowserPlatformLocation(['anyParameter']), '/')));
    spyOn(heroDetailsComponent, 'getHero');

    heroDetailsComponent.ngOnInit();

    expect(heroDetailsComponent.getHero()).toHaveBeenCalled();

  });
});

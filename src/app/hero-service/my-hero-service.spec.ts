import {MyHeroService} from './my-hero.service';
import {MessageService} from '../message.service';
import {async, inject} from '@angular/core/testing';

describe('heroService', () => {


  it('should return an Observable of Hero[]', async(() => {
    const myHeroService = new MyHeroService(new MessageService([]));
    myHeroService.getHero(1).subscribe(result => expect(result).toBeGreaterThan(0));
  }));
});

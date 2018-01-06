import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './Hero';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class MyHeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() {
  }

}

import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./Hero";

@Injectable()
export class MyHeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() {
  }

}

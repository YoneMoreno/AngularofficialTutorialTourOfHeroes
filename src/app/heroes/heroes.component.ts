import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {MyHeroService} from "../my-hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private myHeroService: MyHeroService) {
  }



  ngOnInit() {
  }

}

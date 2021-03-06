import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {MyHeroService} from '../hero-service/my-hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];


  constructor(private myHeroService: MyHeroService) {
  }

  getHeroes(): void {
    this.myHeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}

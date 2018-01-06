import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyHeroService} from "../my-hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private myHeroService: MyHeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myHeroService.getHeroes(id)
      .subscribe(hero => this.hero = hero);
  }
}

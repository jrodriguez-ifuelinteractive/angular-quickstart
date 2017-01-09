import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }              from './hero';
import { HeroService }       from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls: ['app/css/heroes.component.css']
})

export class HeroesComponent implements OnInit  {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

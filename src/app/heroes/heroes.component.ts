import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
   //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService:HeroService) { }

  getHeros(): void {
    //without Observable
    // this.heroes= this.heroService.getHeros();
    //with Observable
    this.heroService.getHeros()
    .subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit() {
    this.getHeros();
  }



}
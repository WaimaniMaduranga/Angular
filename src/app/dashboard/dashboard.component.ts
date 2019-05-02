import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../hero.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes:Hero[] =[];
//heroes: this is a variable,we can only use inside a class,also we can use it this.heroes
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeros()
    .subscribe(heroes => this.heroes =heroes.slice(1 ,5));
  }

}

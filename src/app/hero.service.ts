import { Injectable } from '@angular/core';
import {Hero} from '../app/heroes/hero'
import {HEROES} from '../app/mock-heroes'
import { Observable, of } from 'rxjs';
import {MessageService} from '../app/message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable <Hero[]>{
    this.messageService.add('HeroService:fetched heroes');
    return of (HEROES);
  }
}

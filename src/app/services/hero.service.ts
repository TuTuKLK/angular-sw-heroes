import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes")
    return of(HEROES) 
  }

  constructor(private messageService:MessageService) { }
}

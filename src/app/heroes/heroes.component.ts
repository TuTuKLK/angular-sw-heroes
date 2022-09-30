import { Hero } from './../models/hero';
import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero | undefined;
  heroes: Hero[] = HEROES
  
  constructor() { }

  onSelect(hero:Hero) {
    this.selectedHero = hero
  }
  ngOnInit(): void {
  }


}

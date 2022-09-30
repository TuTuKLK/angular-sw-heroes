import { HeroService } from './../services/hero.service';
import { Hero } from './../models/hero';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero | undefined;
  heroes: Hero[]| undefined;

  getHeroes() {
    this.heroService.getHeroes().subscribe(res => this.heroes = res);
  }
  
  constructor(private heroService:HeroService ) { }
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }


  ngOnInit(): void {
    this.getHeroes();
  }


}

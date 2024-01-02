import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  public heroes:Hero[] = [];
  private URL_HERO:string = '/hero/';

  constructor( private _heroesService:HeroesService, private router:Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  onHeroSelected( indexHero:number ){
    this.router.navigate( [`${this.URL_HERO}${indexHero}`] );
  }


}

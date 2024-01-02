import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss']
})
export class SearchHeroComponent {
  public heroes:Hero[] = [];
  public wordSearch:string;
  private URL_HERO:string = '/hero/';

  constructor( private _heroesService:HeroesService, private router:Router, public activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.wordSearch = params['word'];
      this.heroes = this._heroesService.searchHeroes( this.wordSearch );
    });
  }

  onHeroSelected( indexHero:number ){
    this.router.navigate( [`${this.URL_HERO}${indexHero}`] );
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { SpinnerService } from '@src/app/core/spinner.service';
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

  constructor( private _heroesService:HeroesService, private router:Router, public activatedRoute:ActivatedRoute, private spinnerService:SpinnerService) {
    this.spinnerService.showSpinner()
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.wordSearch = params['word'];
      this.heroes = this._heroesService.searchHeroes( this.wordSearch );
      this.spinnerService.hideSpinner();
    });
  }

  onHeroSelected( hero:Hero ){
    this.router.navigate( [`${this.URL_HERO}${hero.id}`] );
  }
}

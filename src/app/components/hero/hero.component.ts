import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { RouteUrlService } from '@src/app/core/route-url.service';
import { SpinnerService } from '@src/app/core/spinner.service';
import { COMIC_HOUSE } from '@src/app/shared/enums/comic-house.enum';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public hero:Hero;

  public constructor(private activatedRoute: ActivatedRoute,private _heroesService: HeroesService, private routeUrlService:RouteUrlService, private spinnerService:SpinnerService) {
    this.spinnerService.showSpinner()
  }

  public ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      const heroId = params['id'];
      this.getHero(heroId)
    });
    
  }

  public getHero(heroId:string){
    this.spinnerService.hideSpinner()
    const hero = this._heroesService.getHeroById( heroId )
    if(hero){
      this.hero = hero;
      this.changeViewTitle(hero)
    };
  }

  public getImgHouse(house:string){
   return house === COMIC_HOUSE.MARVEL ? 'marvel-logo.png' : 'dc-logo.jpg' 
  }

  private changeViewTitle(hero:Hero){
    this.routeUrlService.title = hero.name;
  }

}

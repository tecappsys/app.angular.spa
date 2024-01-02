import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { COMIC_HOUSE } from '@src/app/shared/enums/comic-house.enum';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public hero:Hero;

  private LOGO_MARVEL ='../../assets/img/marvel-logo.png'
  private LOGO_DC ='../../assets/img/dc-logo.jpg'

  public constructor(private activatedRoute: ActivatedRoute,private _heroesService: HeroesService) {}

  public ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.hero = this._heroesService.getHeroById( params['id'] );
  });
  }

  public getImgHouse(house:string){
   return house === COMIC_HOUSE.MARVEL ? this.LOGO_MARVEL : this.LOGO_DC  
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { SpinnerService } from '@src/app/core/spinner.service';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  public heroes:Hero[] = [];
  private URL_HERO:string = '/hero/';

  public constructor( private _heroesService:HeroesService, private router:Router, private spinnerService:SpinnerService) {
    this.spinnerService.showSpinner()
  }

  public ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    this.spinnerService.hideSpinner()
  }

  public onHeroSelected( hero:Hero ){
    this.router.navigate( [`${this.URL_HERO}${hero.id}`] );
  }


}

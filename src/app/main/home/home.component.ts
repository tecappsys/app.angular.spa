import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '@src/app/core/heroes.service';
import { Heroe } from '@src/app/shared/interface/Heroe.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  onHeroeSelected( heroe:Heroe ){

    // this.router.navigate( ['/heroe',idx] );
  }


}

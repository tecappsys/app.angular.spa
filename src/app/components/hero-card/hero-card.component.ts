import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMIC_HOUSE } from '@src/app/shared/enums/comic-house.enum';
import { Hero } from '@src/app/shared/interface/Hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() public hero:Hero;
  @Output() public heroSelected: EventEmitter<Hero> = new EventEmitter();

  public constructor() {}

  public ngOnInit() {
  }

  public onClick() {
    this.heroSelected.emit( this.hero );
  }

  public getImgHouse(house:string){
   return house === COMIC_HOUSE.MARVEL ? 'marvel-logo.png' : 'dc-logo.jpg'  
  }

}
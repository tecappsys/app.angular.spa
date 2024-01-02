import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { HeroesService } from '../core/heroes.service';
import { HeroComponent } from '../components/hero/hero.component';
import { HeroCardComponent } from '../components/hero-card/hero-card.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeroComponent,
    HeroCardComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports:[
    MainComponent
  ],
  providers:[
    HeroesService
  ]
})

export class MainModule { }

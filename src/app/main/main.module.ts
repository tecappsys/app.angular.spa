import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesService } from '../core/heroes.service';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeroeComponent,
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

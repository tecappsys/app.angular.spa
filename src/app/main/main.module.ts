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
import { SearchHeroComponent } from '../components/search-hero/search-hero.component';
import { RouteUrlService } from '../core/route-url.service';
import { SpinnerService } from '../core/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToolbarSearchComponent } from './components/toolbar/components/toolbar-search/toolbar-search.component';
import { ToolbarTitleComponent } from './components/toolbar/components/toolbar-title/toolbar-title.component';

@NgModule({
  declarations: [
    // BASE COMPONENTS
    MainComponent,
    NavbarComponent,
    ToolbarComponent,    
    ToolbarSearchComponent,
    ToolbarTitleComponent,
    SpinnerComponent,   
    
    // EXTRA COMPONENTS    
    HomeComponent,
    HeroComponent,
    HeroCardComponent,   
    SearchHeroComponent,
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
    RouteUrlService,
    SpinnerService, 
    HeroesService
  ]
})

export class MainModule { }

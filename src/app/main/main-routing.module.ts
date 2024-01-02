import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../components/home/home.component';
import { HeroComponent } from '../components/hero/hero.component';
import { SearchHeroComponent } from '../components/search-hero/search-hero.component';

const routes: Routes = [{
  path: '',
  component:MainComponent,
  children:[
    {
      path:'',
      pathMatch:'full',      
      component:HomeComponent,
      data:{
        entity:'Hero',
        title:'Marvel and DC'
      }
    },
    { 
      path: 'hero/:id',
      component: HeroComponent,    
      data:{
        entity:'Hero',
        title:'',
        urlBack:'/'
      } 
    },
    { 
      path: 'search/:word',
      component: SearchHeroComponent,
      data:{
        entity:'Search',
        title:'',
        urlBack:'/'
      } 
    },
    // { path: 'about', component: AboutComponent },
    
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

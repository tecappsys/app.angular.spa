import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../components/home/home.component';
import { HeroComponent } from '../components/hero/hero.component';

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
    // { path: 'about', component: AboutComponent },
    // { path: 'search/:word', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

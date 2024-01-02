import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public entity:string;
  public title:string;

  constructor( private router:Router ) { }

  buscarHeroe( word:string ){
    //this.router.navigate( ['/search',word] );
  }
}

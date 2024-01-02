import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from '@src/app/shared/interface/Heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent  implements OnInit {

  @Input() public heroe:Heroe;

  @Output() public heroeSelected: EventEmitter<Heroe> = new EventEmitter();

  public constructor() {}

  ngOnInit() {
  }

  onClick() {
    this.heroeSelected.emit( this.heroe );
  }

}
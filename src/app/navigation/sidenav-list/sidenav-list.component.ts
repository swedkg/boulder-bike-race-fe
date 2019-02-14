import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as globals from '../../globals';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
  // providers: [globals]
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  public globals = globals;
  constructor() {}

  ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}

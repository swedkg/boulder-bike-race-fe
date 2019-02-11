import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule
} from '@angular/core';
import { globals } from '../../globals';
@NgModule({
  imports: [globals]
})
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  private globals = globals;
  constructor() {}

  ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}

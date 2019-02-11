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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  private globals = globals;

  constructor() {}

  ngOnInit() {
    console.log(this);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}

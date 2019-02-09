import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { RidersService } from './riders.service';

@NgModule({
  providers: [RidersService]
})
@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class RidersComponent implements OnInit {
  public riders: {} = [];
  constructor(private RidersService: RidersService) {}

  ngOnInit() {
    console.log(this);
    this.RidersService.getriders().subscribe(data => {
      this.riders = data;
    });
  }
}

import { NgModule, Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@NgModule({
  imports: [CounterComponent]
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

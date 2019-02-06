import {
  NgModule,
  Component,
  OnInit,
  HostListener,
  ViewChild
} from '@angular/core';
import { AgmMap } from '@agm/core';
import { RidersService } from '../riders.service';

@NgModule({
  providers: [RidersService]
})
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(private RidersService: RidersService) {}

  // lat: number = 51.678418;
  // lng: number = 7.809007;

  markers = [];

  @ViewChild(AgmMap)
  public agmMap: AgmMap;

  @HostListener('window:resize')
  onWindowResize() {
    // console.log('resize');
    // console.log(this);

    this.agmMap.triggerResize();
  }

  ngOnInit() {
    console.log(this);
    this.RidersService.getriders().subscribe(data => {
      this.markers = data;
      console.log(data, this);
    });
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  quote?: string;
  firstName?: string;
  lastName?: string;
  img?: string;
  stateOfOrigin?: string;
  cityOfOrigin?: string;
  draggable: boolean;
}

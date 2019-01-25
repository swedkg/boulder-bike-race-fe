import { Component, OnInit, NgModule } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@NgModule({
  imports: [GalleryComponent]
})
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

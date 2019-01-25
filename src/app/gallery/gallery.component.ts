import { Component, OnInit, NgModule } from '@angular/core';
import {
  MasonryGalleryModule,
  IMasonryGalleryImage
} from 'ngx-masonry-gallery';

import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  imports: [MasonryGalleryModule, IMasonryGalleryImage, NgxMasonryModule]
})
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor() {}

  // masonryItems = [
  //   { title: 'item 1' },
  //   { title: 'item 2' },
  //   { title: 'item 3' },
  //   { title: 'item 4' },
  //   { title: 'item 5' },
  //   { title: 'item 6' }
  // ];

  // private width: number = 200;

  masonryItems = [
    {
      src:
        'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg'
    },
    {
      src:
        'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg'
    },
    {
      src:
        'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg'
    },
    {
      src:
        'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg'
    },
    {
      src:
        'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg'
    },
    {
      src:
        'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg'
    },
    {
      src:
        'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg'
    },
    {
      src:
        'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg'
    },
    {
      src:
        'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg'
    },
    {
      src:
        'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg'
    },
    {
      src:
        'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg'
    },
    {
      src:
        'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg'
    },
    {
      src:
        'https://www.ogttx.org/wp-content/themes/ogt/media/_frontend/img/bkg.jpg'
    },
    {
      src:
        'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg'
    },
    {
      src:
        'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg'
    },
    {
      src:
        'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg'
    }
  ];

  // public get images(): IMasonryGalleryImage[] {
  //   return this.urls.map(
  //     m =>
  //       <IMasonryGalleryImage>{
  //         imageUrl: m
  //       }
  //   );
  // }

  ngOnInit() {}
}

import {
  Component,
  OnInit,
  NgModule,
  HostListener,
  ElementRef
} from '@angular/core';
import { GalleryService } from './gallery.service';
import {
  MasonryGalleryModule,
  IMasonryGalleryImage
} from 'ngx-masonry-gallery';

import { NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';
import { debounce } from 'rxjs/operators';

@NgModule({
  imports: [MasonryGalleryModule, IMasonryGalleryImage, NgxMasonryModule],
  providers: [GalleryService]
})
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(private galleryService: GalleryService, private el: ElementRef) {}

  // @HostListener('window:resize', ['$event']) onResize(event) {
  //   console.log('window:resize', event.target);
  // }

  // @HostListener('scroll', ['$event']) onScroll($event) {
  //   console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
  // }

  // @HostListener('window:scroll', ['$event']) onWindowScroll($event, event) {
  //   console.log('scrolling...');
  // }

  // @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
  //   console.log('mouseenter works', event.target);
  // }

  // @HostListener('click', ['$event']) onClick(e) {
  //   console.log('click works', e.target);
  // }

  // @HostListener('mousewheel', ['$event']) onScroll5(e) {
  //   console.log('mousewheel works', e);
  // }

  // @HostListener('document:mousemove', ['$event'])
  // sfdsfsd(e) {
  //   console.log('mousemove works', e);
  // }

  public masonryItems = [];
  private photos;
  private photosPage = 0;

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.25s',
    itemSelector: '.masonry-item',
    percentPosition: true,
    columnWidth: '.masonry-sizer'
  };

  private _debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  private db = this._debounce(
    function(appPhotosSection) {
      let scrollTop = appPhotosSection.scrollTop, // pixels hidden in top due to the scroll. With no scroll its value is 0.
        scrollHeight = appPhotosSection.scrollHeight, // pixels of the whole div
        clientHeight = appPhotosSection.clientHeight; //pixels that you see in your browser.

      let scrollPerCent = scrollTop / (scrollHeight - clientHeight);

      if (scrollPerCent > 0.8) {
        this.photosPage++;
        let tempPhotos = [];
        tempPhotos.concat(this.masonryItems);
        this.galleryService.getPhotos(this.photosPage).subscribe(data => {
          let photos = data.photos;
          photos.photo.forEach(el => {
            let url =
              'https://farm' +
              el.farm +
              '.staticflickr.com/' +
              el.server +
              '/' +
              el.id +
              '_' +
              el.secret +
              '_z.jpg';
            // console.log(string);
            this.masonryItems.push({ src: url });
          });
          // this.masonryItems = tempPhotos.slice(0);
          console.log(data, this.masonryItems, this.photosPage);
        });
      }
      console.log(scrollTop, scrollPerCent);
    },
    250,
    false
  );

  ngOnInit() {
    this.photosPage++;
    let self = this;
    let appPhotosSection = document.querySelector('app-photos section');

    appPhotosSection.addEventListener('scroll', function() {
      self.db(appPhotosSection);
    });

    this.galleryService.getPhotos(this.photosPage).subscribe(data => {
      this.photos = data.photos;
      this.photos.photo.forEach(el => {
        let url =
          'https://farm' +
          el.farm +
          '.staticflickr.com/' +
          el.server +
          '/' +
          el.id +
          '_' +
          el.secret +
          '_z.jpg';
        // console.log(string);
        this.masonryItems.push({ src: url });
      });
      console.log(data, this.masonryItems);
    });
  }
}

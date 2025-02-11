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

  public masonryItems = [];
  private photos;
  private photosPage = 0;
  private appPhotosSection;

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.25s',
    itemSelector: '.masonry-item',
    percentPosition: true,
    columnWidth: '.masonry-sizer'
  };

  /**
   * imageError
   */
  public imageError(index) {
    this.masonryItems[index].hasImage = false;
  }

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

  private getPhotos() {
    this.galleryService.getPhotos(this.photosPage).subscribe(data => {
      this.photos = data.photos;
      this.photos.photo.forEach(el => {
        let title = el.title;
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

        this.masonryItems.push({
          src: url,
          title: title,
          hasImage: true
        });
      });
      // console.log(data, this.masonryItems);
    });
  }

  private addPhotos = this._debounce(
    function() {
      let appPhotosSection = this.appPhotosSection;
      let scrollTop = appPhotosSection.scrollTop, // pixels hidden in top due to the scroll. With no scroll its value is 0.
        scrollHeight = appPhotosSection.scrollHeight, // pixels of the whole div
        clientHeight = appPhotosSection.clientHeight; //pixels that you see in your browser.

      let scrollPerCent = scrollTop / (scrollHeight - clientHeight);

      if (scrollPerCent > 0.8) {
        this.photosPage++;
        let tempPhotos = [];
        tempPhotos.concat(this.masonryItems);

        this.getPhotos();
      }
      // console.log(scrollTop, scrollPerCent);
    },
    250,
    false
  );

  ngOnInit() {
    this.photosPage++;
    let self = this;
    this.appPhotosSection = document.querySelector('app-photos section');

    this.appPhotosSection.addEventListener('scroll', function() {
      self.addPhotos();
    });

    // console.log(this);

    this.getPhotos();
  }

  ngOnDestroy() {
    this.appPhotosSection.removeEventListener('scroll', function() {
      this.addPhotos();
    });
  }
}

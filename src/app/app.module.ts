import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material';
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { LocationComponent } from './location/location.component';
import { RidersComponent } from './riders/riders.component';
import { ContestComponent } from './contest/contest.component';
import { CounterComponent } from './counter/counter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { NgxMasonryModule } from 'ngx-masonry';
import { GalleryService } from './gallery/gallery.service';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { AgmOverlays } from 'agm-overlays';
import { RidersService } from './riders/riders.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    PhotosComponent,
    LocationComponent,
    RidersComponent,
    ContestComponent,
    CounterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MasonryGalleryModule,
    NgxMasonryModule,
    HttpClientModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAxU077IxAHkK25YbCs6rRwwTw7Gx-MHg'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [GalleryService, RidersService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { CounterComponent } from '../counter/counter.component';
import { PhotosComponent } from '../photos/photos.component';
import { LocationComponent } from '../location/location.component';
import { RidersComponent } from '../riders/riders.component';
import { ContestComponent } from '../contest/contest.component';

import { routes } from './routing.module';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent,
        CounterComponent,
        PhotosComponent,
        LocationComponent,
        RidersComponent,
        ContestComponent
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  // it('fakeAsync works', fakeAsync(() => {
  //   let promise = new Promise(resolve => {
  //     setTimeout(resolve, 10);
  //   });
  //   let done = false;
  //   promise.then(() => (done = true));
  //   tick(50);
  //   expect(done).toBeTruthy();
  // }));

  // it('navigate to "" redirects you to /home', fakeAsync(() => {
  //   router.navigate(['']);
  //   tick();
  //   expect(location.path()).toBe('/home');
  // }));
});

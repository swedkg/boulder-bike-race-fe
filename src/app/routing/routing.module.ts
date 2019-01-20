import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PhotosComponent } from '../photos/photos.component';
import { LocationComponent } from '../location/location.component';
import { RidersComponent } from '../riders/riders.component';
import { ContestComponent } from '../contest/contest.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'location', component: LocationComponent },
  { path: 'riders', component: RidersComponent },
  { path: 'contest', component: ContestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

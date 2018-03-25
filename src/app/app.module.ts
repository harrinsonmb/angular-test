import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { LocationManagerService } from './services/location-manager.service';
import { PageComponent } from './components/shared/page/page.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProfileThumbnailComponent } from './components/shared/profile-thumbnail/profile-thumbnail.component';
import { ProfileListComponent } from './components/shared/profile-list/profile-list.component';
import { ProfileFullComponent } from './components/shared/profile-full/profile-full.component';
import { ProfileManagerService } from './services/profile-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageAdjustDirective } from './directives/image-adjust.directive';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    ProfileComponent,
    PageComponent,
    ProfileThumbnailComponent,
    ProfileListComponent,
    ProfileFullComponent,
    ImageAdjustDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {useHash: true}
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LocationManagerService,
    ProfileManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

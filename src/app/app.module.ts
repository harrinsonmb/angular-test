import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ModalComponent } from './shared/modal/modal.component';
import { LocationManagerService } from "./shared/services/location-manager.service";
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from "./shared/page/page.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    ProfileComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {}
    )
  ],
  providers: [LocationManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

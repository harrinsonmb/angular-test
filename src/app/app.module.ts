import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { LocationManagerService } from "./services/location-manager.service";
import { PageComponent } from "./components/shared/page/page.component";
import {ProfileComponent} from "./components/main/profile/profile.component";
import {HomeComponent} from "./components/main/home/home.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:id', component: ProfileComponent },
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

import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { ModalComponent } from "./components/shared/modal/modal.component";
import { LocationManagerService } from "./services/location-manager.service";
import {Router, RouterOutlet} from "@angular/router";
import { By } from "@angular/platform-browser";
import {APP_BASE_HREF, Location} from "@angular/common";
import {appRoutes} from "./app.module";
import {HomeComponent} from "./components/main/home/home.component";
import {ProfileComponent} from "./components/main/profile/profile.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        ModalComponent,
        HomeComponent,
        ProfileComponent
      ],
      imports: [ RouterTestingModule.withRoutes(appRoutes), ],
      providers : [
        LocationManagerService,
        { provide: APP_BASE_HREF, useValue : '/'  }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  // it('should create the app', async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it('should create the navbar', async(() => {
  //   const fixture = TestBed.createComponent(NavbarComponent);
  //   const navbar = fixture.debugElement.componentInstance;
  //   fixture.detectChanges();
  //   expect(navbar).toBeTruthy();
  // }));
  // it('should create the modal', async(() => {
  //   const fixture = TestBed.createComponent(ModalComponent);
  //   const modal = fixture.debugElement.componentInstance;
  //   fixture.detectChanges();
  //   expect(modal).toBeTruthy();
  // }));

  // it('should create the home', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   const home = fixture.debugElement.componentInstance;
  //   fixture.detectChanges();
  //   expect(home).toBeTruthy();
  // }));

  // it(`should go to 'home' when the route is empty`, fakeAsync(() => {
  //   router.navigate(['']);
  //   tick();
  //   expect(location.path()).toBe('/home');
  // }));
});

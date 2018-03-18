import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ModalComponent } from "./shared/modal/modal.component";
import { LocationManagerService } from "./shared/services/location-manager.service";
import { HomeComponent } from "./home/home.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        ModalComponent,
        HomeComponent
      ],
      imports: [ RouterTestingModule ],
      providers : [ LocationManagerService ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should create the navbar', async(() => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.debugElement.componentInstance;
    expect(navbar).toBeTruthy();
  }));
  it('should create the modal', async(() => {
    const fixture = TestBed.createComponent(ModalComponent);
    const navbar = fixture.debugElement.componentInstance;
    expect(navbar).toBeTruthy();
  }));
  it('should create the home', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const navbar = fixture.debugElement.componentInstance;
    expect(navbar).toBeTruthy();
  }));
});

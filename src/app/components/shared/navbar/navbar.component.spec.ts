import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { NavbarComponent } from './navbar.component';
import { LocationManagerService } from '../../../services/location-manager.service';
import { HomeComponent } from '../../main/home/home.component';
import { ProfileComponent } from '../../main/profile/profile.component';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        ProfileComponent
      ],
      providers : [
        LocationManagerService,
      ],
      imports: [ RouterTestingModule, FormsModule ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the default title on initialization', () => {
    let pageTitle = component.pageTitle;
    expect(pageTitle).toBe('Default page');
  });
});

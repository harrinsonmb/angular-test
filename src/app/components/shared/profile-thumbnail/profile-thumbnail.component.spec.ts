import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThumbnailComponent } from './profile-thumbnail.component';
import {appRoutes} from '../../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from '../../main/home/home.component';
import {ProfileComponent} from '../../main/profile/profile.component';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LoginComponent} from '../../main/login/login.component';

describe('ProfileThumbnailComponent', () => {
  let component: ProfileThumbnailComponent;
  let fixture: ComponentFixture<ProfileThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileThumbnailComponent, HomeComponent, ProfileComponent, LoginComponent ],
      imports: [ RouterTestingModule.withRoutes(appRoutes), FormsModule ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

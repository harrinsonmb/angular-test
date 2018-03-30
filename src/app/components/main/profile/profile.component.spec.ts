import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LocationManagerService } from '../../../services/location-manager.service';
import {ProfileListComponent} from '../../shared/profile-list/profile-list.component';
import {ProfileThumbnailComponent} from '../../shared/profile-thumbnail/profile-thumbnail.component';
import {ProfileManagerService} from '../../../services/profile-manager.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, ProfileListComponent, ProfileThumbnailComponent ],
      imports: [ RouterTestingModule ],
      providers : [ LocationManagerService, ProfileManagerService, HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListComponent } from './profile-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProfileListComponent', () => {
  let component: ProfileListComponent;
  let fixture: ComponentFixture<ProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

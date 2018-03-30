import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFullComponent } from './profile-full.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ProfileFullComponent', () => {
  let component: ProfileFullComponent;
  let fixture: ComponentFixture<ProfileFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFullComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFullComponent } from './profile-full.component';

describe('ProfileFullComponent', () => {
  let component: ProfileFullComponent;
  let fixture: ComponentFixture<ProfileFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFullComponent ]
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

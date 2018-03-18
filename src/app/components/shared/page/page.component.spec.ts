import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { LocationManagerService } from '../../../services/location-manager.service';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent ],
      providers : [ LocationManagerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PageComponent);
      component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw an error if page name not defined', () => {
    expect(function () {
      fixture.detectChanges();
    }).toThrow();
  });

  it('should not to throw an error if page name is defined', () => {
    component.pageTitle = 'Default Page';
    expect(function () {
      fixture.detectChanges();
    }).not.toThrow();
  });
});

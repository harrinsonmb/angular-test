import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeInputComponent } from './range-input.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('RangeInputComponent', () => {
  let component: RangeInputComponent;
  let fixture: ComponentFixture<RangeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeInputComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

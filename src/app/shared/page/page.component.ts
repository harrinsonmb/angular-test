import { Component, OnInit } from '@angular/core';
import IPage from "./page.interface";
import {LocationManagerService} from "../services/location-manager.service";

@Component({
  selector: 'app-page',
  template: '',
  styles: ['']
})
export class PageComponent implements OnInit, IPage {
  pageTitle: string;
  pageBack: string = null;
  LocationManagerService: LocationManagerService;

  constructor(LocationManagerService: LocationManagerService) {
    this.LocationManagerService = LocationManagerService;
  }

  ngOnInit() {
    if(this.pageTitle && this.pageTitle !== ''){
      this.LocationManagerService.setData(this.pageTitle, this.pageBack);
    }else{
      console.error("You have to define a name for the current page", this);
    }
  }
}

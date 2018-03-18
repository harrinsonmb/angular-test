import { Component, OnInit } from '@angular/core';
import { LocationManagerService } from '../../../services/location-manager.service';

@Component({
  selector: 'app-page',
  template: '',
  styles: ['']
})
export class PageComponent implements OnInit {
  pageTitle: string;
  showBackButton: boolean = false;
  LocationManagerService: LocationManagerService;

  constructor(LocationManagerService: LocationManagerService) {
    this.LocationManagerService = LocationManagerService;
  }

  ngOnInit() {
    if(this.pageTitle && this.pageTitle !== ''){
      this.LocationManagerService.setData(this.pageTitle, this.showBackButton);
    }else{
      throw {
        name: "NoPageTitleProvided",
        message: "You have to define a name for the current page",
        object: this
      }
    }
  }
}

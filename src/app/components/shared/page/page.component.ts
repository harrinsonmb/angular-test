import { Component, OnInit } from '@angular/core';
import { LocationManagerService } from '../../../services/location-manager.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page',
  template: '',
  styles: ['']
})
export class PageComponent implements OnInit {
  pageTitle: string;
  protected showBackButton: boolean = false;

  constructor(private router: Router, private LocationManagerService: LocationManagerService) {
    this.LocationManagerService = LocationManagerService;
  }

  ngOnInit() {
    this.checkLogin();
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

  checkLogin(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['login']).then();
    }
  }
}

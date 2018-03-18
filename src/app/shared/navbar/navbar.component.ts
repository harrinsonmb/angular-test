import {Component, Input, OnInit} from '@angular/core';
import {LocationManagerService} from "../services/location-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() pageTitle:string = 'Default page';
  @Input() pageBack:string = null;
  router: Router;

  constructor(_router: Router, private LocationManagerService: LocationManagerService) {
    this.LocationManagerService.onGetData.subscribe(res => {
      this.pageTitle = this.LocationManagerService.pageLocation;
      this.pageBack = this.LocationManagerService.pageBack;
      this.router = _router;
    })
  }

  ngOnInit() {}

  goTo(event, href){
    this.router.navigate([href]).then( x => {
      return x;
    });
  }

}

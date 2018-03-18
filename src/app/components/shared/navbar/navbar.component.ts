import { Component, Input, OnInit } from '@angular/core';
import { LocationManagerService } from '../../../services/location-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() pageTitle:string = 'Default page';
  @Input() showBackButton:boolean;
  router: Router;

  constructor(_router: Router, private LocationManagerService: LocationManagerService, private route: ActivatedRoute) {
    this.router = _router;
    this.LocationManagerService.onGetData.subscribe(res => {
      this.pageTitle = this.LocationManagerService.pageLocation;
      this.showBackButton = this.LocationManagerService.showBackButton;
    });
  }

  ngOnInit() {}

  goBack(){
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}

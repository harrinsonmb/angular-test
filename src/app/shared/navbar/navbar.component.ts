import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from "../services/location-manager.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title:string;

  constructor(private LocationService: LocationService) {
    this.LocationService.onGetData.subscribe(res => {
      this.title = this.LocationService.location;
    })
  }

  ngOnInit() {
  }

}

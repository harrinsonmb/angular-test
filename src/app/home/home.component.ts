import {Component, OnInit} from '@angular/core';
import {LocationService} from "../shared/services/location-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private LocationService: LocationService) {}

  ngOnInit() {
    this.LocationService.setData('Home');
  }

}

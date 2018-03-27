import {Component, Input, OnInit } from '@angular/core';
import Brastlewark from '../../../models/Brastlewark';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input() profiles: Brastlewark [];

  constructor() {}

  ngOnInit() {
  }
}

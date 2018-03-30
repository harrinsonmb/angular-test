import { Component, Input, OnInit } from '@angular/core';
import Brastlewark from '../../../models/Brastlewark';

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.scss']
})
export class ProfileThumbnailComponent implements OnInit {
  @Input() profileUser: Brastlewark;

  constructor() {
  }


  ngOnInit() {
  }

}

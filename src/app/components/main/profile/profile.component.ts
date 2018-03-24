import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PageComponent } from '../../shared/page/page.component';
import { LocationManagerService } from '../../../services/location-manager.service';
import {Brastlewark} from "../../../models/Brastlewark";
import {ProfileManagerService} from "../../../services/profile-manager.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends PageComponent{
  protected pageTitle:string = 'Profile page';
  protected showBackButton:boolean = true;
  private sub:Subscription;
  profileUser: Brastlewark;
  friendsList: Brastlewark [];

  constructor(LocationManagerService: LocationManagerService, private route: ActivatedRoute, private profileManager: ProfileManagerService){
    super(LocationManagerService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sub = this.route.params
      .subscribe(params => {
        this.profileManager.onGetData.subscribe( res => {
          this.profileUser = this.profileManager.getBrastlewark(+params['id']);
          this.friendsList = this.profileManager.getBrastlewarkListByNames(this.profileUser.friends);
        })
    });
  }
}

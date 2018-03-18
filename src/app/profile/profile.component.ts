import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { LocationManagerService } from "../shared/services/location-manager.service";
import { PageComponent } from "../shared/page/page.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends PageComponent{
  pageTitle:string = 'Profile page';
  showBackButton:boolean = true;
  id:number;
  private sub:Subscription;

  constructor(LocationManagerService: LocationManagerService, private route: ActivatedRoute){
    super(LocationManagerService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PageComponent } from '../../shared/page/page.component';
import { LocationManagerService } from '../../../services/location-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends PageComponent{
  protected pageTitle:string = 'Profile page';
  protected showBackButton:boolean = true;
  protected id:number;
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

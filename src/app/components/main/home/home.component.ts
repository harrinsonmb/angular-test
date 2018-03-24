import { Component, Input} from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { LocationManagerService } from '../../../services/location-manager.service';
import { Brastlewark } from '../../../models/Brastlewark';
import { ProfileManagerService } from '../../../services/profile-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent{
  @Input() elementsNumber:number = 10;
  protected pageTitle: string = 'Home page';
  profiles: Brastlewark [];
  protected profileList: Brastlewark [];

  constructor(private locationService: LocationManagerService, private configService:ProfileManagerService){
    super(locationService);
  }

  ngOnInit(){
    super.ngOnInit();
    this.configService.onGetData.subscribe( res => {
      this.profileList = this.configService.getBrastlewarkList();
      this.profiles = this.profileList.slice(0, this.elementsNumber);
    });
  }

  updateProfiles(){
    if(this.elementsNumber >= 0 && this.elementsNumber <= this.profileList.length){
      this.profiles = this.profileList.slice(0, this.elementsNumber);
    }
  }
}

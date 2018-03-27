import {AfterContentInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { LocationManagerService } from '../../../services/location-manager.service';
import { ProfileManagerService } from '../../../services/profile-manager.service';
import Brastlewark from '../../../models/Brastlewark';
import FormFilterString from "../../../models/FormFilterString";
import FormFilterRange from "../../../models/FormFilterRange";
import FormFilter from "../../../models/FormFilter";
import FormFilterArray from "../../../models/FormFilterArray";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent implements AfterContentInit{
  @Input() elementsNumber:number = 10;
  @Input() profileName:string = '';
  @Input() minAge:number = null;
  @Input() maxAge:number = null;
  @Input() minHeight:number = null;
  @Input() maxHeight:number = null;
  @Input() minWeight:number = null;
  @Input() maxWeight:number = null;

  protected pageTitle: string = 'Home page';
  protected profileList: Brastlewark [];
  protected filteredProfiles: Brastlewark [];
  filters: any;
  profiles: Brastlewark [];

  constructor(private locationService: LocationManagerService, private configService:ProfileManagerService){
    super(locationService);
    this.filters = [];
  }

  ngOnInit(){
    super.ngOnInit();
    this.configService.onGetData.subscribe( res => {
      this.profileList = this.configService.getBrastlewarkList();
      this.profiles = this.profileList.slice(0, this.elementsNumber);
    });
  }

  ngAfterContentInit(){
    this.initFilters();
  }

  initFilters(){
    let stringFilter = new FormFilterString('name');
    this.registerFilter(stringFilter);
    let rangeFilter = new FormFilterRange('age');
    this.registerFilter(rangeFilter);
    let weightFilter = new FormFilterRange('weight');
    this.registerFilter(weightFilter);
    let heightFilter = new FormFilterRange('height');
    this.registerFilter(heightFilter);
    let arrayFilter = new FormFilterArray('professions');
    this.registerFilter(arrayFilter);
  }

  /***
   * Registers the filters that are called
   * when the form inputs are changed
   * @param {FormFilter} filter
   */
  registerFilter(filter:FormFilter){
    if(filter){
      this.filters.push(filter);
    }else{
      throw new Error("FormFilter registration error");
    }
  }

  /***
   * Applies all the registered filters
   * and modifies the profiles list
   */
  applyFilters(params){
    let filterAttr = params.attrName;
    let filterQuery = params.query;
    let filteredProfiles = this.profileList;
    let fastIterator = this.filters.length;
    for(let i = 0 ; i < fastIterator; i++){
      let currentFilter = this.filters[i];
      filteredProfiles = currentFilter.getFilteredList(filteredProfiles, {attrName:filterAttr, query: filterQuery});
    }
    this.profiles = filteredProfiles.slice(0, this.elementsNumber);
    this.filteredProfiles = filteredProfiles;
  }

  slice(){
    this.profiles = this.filteredProfiles.slice(0, this.elementsNumber);
  }
}

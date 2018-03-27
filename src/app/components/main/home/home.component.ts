import {AfterContentInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { LocationManagerService } from '../../../services/location-manager.service';
import { ProfileManagerService } from '../../../services/profile-manager.service';
import Brastlewark from '../../../models/Brastlewark';
import FormFilterString from "../../../models/FormFilterString";
import FormFilterRange from "../../../models/FormFilterRange";
import FormFilter from "../../../models/FormFilter";
import FormFilterArray from "../../../models/FormFilterArray";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

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

  @Input() currentPage:number = 1;
  @Input() totalPages:number;

  pageTitle: string = 'Home page';
  protected profileList: Brastlewark [];
  protected filteredProfiles: Brastlewark [];
  protected sub: Subscription;
  filters: any;
  profiles: Brastlewark [];

  constructor(private locationService: LocationManagerService, private route: ActivatedRoute, private configService:ProfileManagerService){
    super(locationService);
    this.filters = [];
  }

  ngOnInit(){
    super.ngOnInit();
    this.configService.onGetData.subscribe( res => {
      this.profileList = this.configService.getBrastlewarkList();
      this.profiles = this.profileList.slice(0, this.elementsNumber);
      this.totalPages =  Math.floor(this.profileList.length/this.elementsNumber)+1;
      this.filteredProfiles = this.profileList;
    });
    this.sub = this.route.params
      .subscribe(params => {
        if(params['id']){
          this.currentPage = +params['id'];
          this.updateView();
        }
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
    this.totalPages =  Math.floor(this.filteredProfiles.length/this.elementsNumber)+1;
  }

  slice(){
    this.profiles = this.filteredProfiles.slice(0, this.elementsNumber);
  }
  
  updateView(){
    let initialPage = this.currentPage-1
    if(initialPage > 0){
      initialPage = this.currentPage * this.elementsNumber - this.elementsNumber;
    }
    this.profiles = this.filteredProfiles.slice(initialPage, initialPage+this.elementsNumber);
  }

}

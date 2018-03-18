import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class LocationManagerService {
  pageLocation:string;
  showBackButton:boolean;

  onGetData = new EventEmitter<boolean>();
  setData(current, back) {
    this.pageLocation = current;
    this.showBackButton = back;
    this.onGetData.emit(true);
  }
}

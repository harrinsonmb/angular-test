import {Injectable, EventEmitter, Output} from "@angular/core";

@Injectable()
export class LocationManagerService {
  pageLocation:string;
  showBackButton:boolean;
  @Output() onGetData = new EventEmitter<boolean>();

  setData(current, back) {
    this.pageLocation = current;
    this.showBackButton = back;
    this.onGetData.emit(true);
  }
}

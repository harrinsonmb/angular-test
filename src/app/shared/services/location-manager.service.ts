import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class LocationManagerService {
  pageLocation:string;
  pageBack:string;

  onGetData = new EventEmitter<boolean>();
  setData(current, back) {
    this.pageLocation = current;
    this.pageBack = back;
    this.onGetData.emit(true);
  }
}

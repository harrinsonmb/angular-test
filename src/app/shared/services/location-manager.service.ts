import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class LocationService {
  location:string;
  onGetData = new EventEmitter<boolean>();
  setData(data) {
    this.location = data;
    this.onGetData.emit(true);
  }
}

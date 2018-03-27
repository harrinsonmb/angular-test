import {  Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from "rxjs/ReplaySubject";
import Brastlewark from '../models/Brastlewark';

@Injectable()
export class ProfileManagerService {
  configUrl:string = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
  @Output() onGetData = new ReplaySubject<boolean>();
  brastlewarkList: Brastlewark[];

  constructor(private http: HttpClient) {
    let localBrastlewarkList = localStorage.getItem('Brastlewark');
    if(!localBrastlewarkList){
      this.getData().subscribe( result => {
        this.brastlewarkList = <Brastlewark[]> result['Brastlewark'];
        localStorage.setItem('Brastlewark', JSON.stringify(this.brastlewarkList));
        this.onGetData.next(true);
      });
    }else{
      this.brastlewarkList = <Brastlewark[]> JSON.parse(localStorage.getItem('Brastlewark'));
      this.onGetData.next(true);
    }
  }

  getBrastlewarkList(){
    return this.brastlewarkList;
  }

  getData(){
    return this.http.get(this.configUrl);
  }

  getBrastlewark (number):Brastlewark{
    let brastlewark = this.brastlewarkList.find( profile => {
      return profile.id === number;
    });
    return brastlewark || null;
  }

  getBrastlewarkListByNames(friendsNames:string []):Brastlewark[]{
    let friendsList:Brastlewark[] = [];
    for(let index in friendsNames){
      let currentProfile = this.brastlewarkList.find( profile => {
        return profile.name === friendsNames[index];
      });
      friendsList.push(currentProfile);
    }
    return friendsList;
  }
}

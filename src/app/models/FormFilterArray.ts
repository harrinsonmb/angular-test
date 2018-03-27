import {cleanString} from "../utils/utils";
import FormFilter from "./FormFilter";
import Brastlewark from "./Brastlewark";

export default class FormFilterArray implements FormFilter{
  filterAttr: string;

  constructor(attr:string){
    if( !attr ){
      throw new Error('FormFilterArray creation error');
    }
    this.filterAttr = attr;
  }

  getFilteredList(list, params):Brastlewark[]{
    let attrName = params.attrName;
    let query = params.query;
    let filterArray = query.filterArray;
    if(attrName === this.filterAttr && filterArray){
      return list.filter( profile => {
        let objectArray = profile[this.filterAttr];
        let fastIterator = objectArray.length;
        for(let i = 0 ; i < fastIterator; i++){
          let currentString = objectArray[i];
          let fastJreator = filterArray.length;
          for(let j = 0 ; j < fastJreator; j++){
            let currentSearch = filterArray[j];
            if(cleanString(currentString).indexOf(cleanString(currentSearch)) !== -1){
              return true;
            }
          }
        }
      });
    }else{
      return list;
    }
  }
}

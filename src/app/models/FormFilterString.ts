import {cleanString} from "../utils/utils";
import FormFilter from "./FormFilter";
import Brastlewark from "./Brastlewark";

export default class FormFilterString implements FormFilter{
  filterAttr: string;

  constructor(attr:string){
    if(!attr){
      throw new Error('FormFilterString creation error');
    }
    this.filterAttr = attr;
  }

  getFilteredList(list, params):Brastlewark[]{
    let attrName = params.attrName;
    let query = params.query;
    let word = query.filterWord;
    if(attrName === this.filterAttr && word && word !== ''){
      return list.filter( profile => {
        return cleanString(profile[this.filterAttr]).indexOf(cleanString(word)) !== -1
      })
    }else{
      return list;
    }
  }
}

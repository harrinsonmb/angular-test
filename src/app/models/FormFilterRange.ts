import FormFilter from "./FormFilter";
import Brastlewark from "./Brastlewark";

export default class FormFilterRange implements FormFilter{
  filterAttr: string;

  constructor(attr:string){
    if( !attr){
      throw new Error('FormFilterRange creation error');
    }
    this.filterAttr = attr;
  }

  getFilteredList(list, params):Brastlewark[]{
    let attrName = params.attrName;
    let query = params.query;
    let filterMin = query.filterMin;
    let filterMax = query.filterMax;
    if( attrName === this.filterAttr && (filterMin || filterMax)){
      return list.filter( profile => {
        return  (!filterMin || filterMin <= profile[this.filterAttr])
          &&    (!filterMax || filterMax >= profile[this.filterAttr]);
      });
    }else{
      return list;
    }
  }
}

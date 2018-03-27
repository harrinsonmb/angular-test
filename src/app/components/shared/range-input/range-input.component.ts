import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Brastlewark from "../../../models/Brastlewark";

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent implements OnInit {
  @Input() modelName:string;
  @Input() maxModel:number;
  @Input() minModel:number;
  @Input() list;
  @Output() getFilteredList:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterList(attrName, query){
    this.getFilteredList.emit({ attrName, query});
  }
}

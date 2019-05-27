import { Component, OnInit } from '@angular/core';
import { FeenodeService } from '../feenode.service';

@Component({
  selector: 'app-bnb',
  templateUrl: './bnb.component.html',
  styleUrls: ['./bnb.component.css']
})
export class BnbComponent implements OnInit {

  public bnbData;
  public volume;

  public bncData;
  public bncTime;
  public bncVal;
  public bps;
  public numVal;

  constructor(private feenodeservice: FeenodeService) {

   }

  ngOnInit() {

    this.bnbData = this.feenodeservice.bnbData;
    this.volume = +this.getValues(this.bnbData, '24h_volume_usd');

    this.bncData = this.feenodeservice.bncData;
    this.bncTime = this.feenodeservice.bncTime;
    this.bncVal = this.feenodeservice.bncVal;
    this.dateDiff();
    this.countVal();

  }

  getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(this.getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

dateDiff(): number {
  let dateGen = new Date(this.feenodeservice.genesis);
  let dateNow = new Date(this.bncTime.block_time);
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var diffSeconds = Math.round(Math.abs((dateNow.getTime() - dateGen.getTime())));
  this.bps = diffSeconds / this.bncVal.block_height;
  return this.bps;
}

countVal(){
  const valArray = this.bncVal.validators.length;
  console.log(valArray);
}

}

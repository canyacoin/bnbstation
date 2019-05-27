import { Component, OnInit } from '@angular/core';
import { FeenodeService } from '../feenode.service';

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {

  public bncData;
  public bncTime;
  public bncVal;
  public bps;
  public numVal;

  constructor(private feenodeService: FeenodeService) { }

  ngOnInit() {

    this.bncData = this.feenodeService.bncData;
    this.bncTime = this.feenodeService.bncTime;
    this.bncVal = this.feenodeService.bncVal;
    this.dateDiff();
    this.countVal();

    // const secondsSinceGenesis = this.bncTime.block_time - this.feenodeService.genesis;

  }

  dateDiff(): number {
    let dateGen = new Date(this.feenodeService.genesis);
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

import { Component, OnInit } from '@angular/core';
import { FeenodeService } from '../feenode.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import '../../assets/css/styles.css';

@Component({
  selector: 'app-mainnet',
  templateUrl: './mainnet.component.html',
  styleUrls: ['./mainnet.component.css']
})
export class MainnetComponent implements OnInit {

  public bnbPrice;
  public mainnet: boolean = true;
  public title: string = 'Mainnet';
  public notTitle: string = 'Testnet';

  public submit_proposal;
  public deposit;
  public vote;
  public dexList;
  public orderNew;
  public orderCancel;
  public issueMsg;
  public mintMsg;
  public tokensBurn;
  public tokensFreeze;
  public fixed_fee_params;
  public create_validator;
  public remove_validator;

  public dex_fee_fields;
  public expireFee;
  public expireFeeNative;
  public cancelFee;
  public cancelFeeNative;
  public feeRate;
  public feeRateNative;
  public iocExpireFee;
  public iocExpireFeeNative;


  constructor(private feenodeservice: FeenodeService){
  }

  ngOnInit(){

    this.feenodeservice.mainnet = true;
    this.feenodeservice.getFees();
    this.setParams();
  }

    setParams(){
    this.submit_proposal = this.feenodeservice.submit_proposal;
    this.deposit = this.feenodeservice.deposit;
    this.vote = this.feenodeservice.vote;
    this.dexList = this.feenodeservice.dexList;
    this.orderNew = this.feenodeservice.orderNew;
    this.orderCancel = this.feenodeservice.orderCancel;
    this.issueMsg = this.feenodeservice.issueMsg;
    this.mintMsg = this.feenodeservice.mintMsg;
    this.tokensBurn = this.feenodeservice.tokensBurn;
    this.tokensFreeze = this.feenodeservice.tokensFreeze;
    this.fixed_fee_params = this.feenodeservice.fixed_fee_params;
    this.dex_fee_fields = this.feenodeservice.dex_fee_fields.dex_fee_fields;
    this.create_validator = this.feenodeservice.create_validator;
    this.remove_validator = this.feenodeservice.remove_validator;

    this.bnbPrice = this.feenodeservice.bnbData.price_usd;

    // console.log(this.dex_fee_fields[4].fee_value);

    this.expireFee = this.dex_fee_fields[0];
    this.expireFeeNative = this.dex_fee_fields[1];
    this.cancelFee = this.dex_fee_fields[2];
    this.cancelFeeNative = this.dex_fee_fields[3];
    this.feeRate = this.dex_fee_fields[4];
    this.feeRateNative = this.dex_fee_fields[5];
    this.iocExpireFee = this.dex_fee_fields[6];
    this.iocExpireFeeNative = this.dex_fee_fields[7];

    // console.log(this.feeRate);
    // console.log(this.feeRate.fee_value);
  }

  convertToLocaleString(variable) {
  const withCommas = parseFloat(variable).toFixed(2);
  return withCommas.replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  switchNet(){
    if(this.feenodeservice.mainnet){
      this.feenodeservice.mainnet = false;
      this.feenodeservice.getFees();
      this.setParams();
      this.title = 'Testnet';
      this.notTitle = 'Mainnet';
    } else {
      this.feenodeservice.mainnet = true;
      this.feenodeservice.getFees();
      this.setParams();
      this.title = 'Mainnet';
      this.notTitle = 'Testnet';
    }
  }


}

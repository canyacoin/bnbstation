import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeenodeService {

    public mainnet: boolean = true;

    dexApi = 'https://dex.binance.org/api/v1/fees';
    testDexApi = 'https://testnet-dex.binance.org/api/v1/fees';

    dexResp = '[{"msg_type":"submit_proposal","fee":1000000000,"fee_for":1},{"msg_type":"deposit","fee":125000,"fee_for":1},{"msg_type":"vote","fee":0,"fee_for":3},{"msg_type":"create_validator","fee":1000000000,"fee_for":1},{"msg_type":"remove_validator","fee":100000000,"fee_for":1},{"msg_type":"dexList","fee":200000000000,"fee_for":2},{"msg_type":"orderNew","fee":0,"fee_for":3},{"msg_type":"orderCancel","fee":0,"fee_for":3},{"msg_type":"issueMsg","fee":100000000000,"fee_for":2},{"msg_type":"mintMsg","fee":20000000000,"fee_for":2},{"msg_type":"tokensBurn","fee":100000000,"fee_for":1},{"msg_type":"tokensFreeze","fee":1000000,"fee_for":1},{"fixed_fee_params":{"msg_type":"send","fee":62500,"fee_for":1},"multi_transfer_fee":50000,"lower_limit_as_multi":2},{"dex_fee_fields":[{"fee_name":"ExpireFee","fee_value":50000},{"fee_name":"ExpireFeeNative","fee_value":10000},{"fee_name":"CancelFee","fee_value":50000},{"fee_name":"CancelFeeNative","fee_value":10000},{"fee_name":"FeeRate","fee_value":1000},{"fee_name":"FeeRateNative","fee_value":400},{"fee_name":"IOCExpireFee","fee_value":25000},{"fee_name":"IOCExpireFeeNative","fee_value":5000}]}]';

    testDexResp =
    '[{"msg_type":"submit_proposal","fee":1000000000,"fee_for":1},{"msg_type":"deposit","fee":125000,"fee_for":1},{"msg_type":"vote","fee":0,"fee_for":3},{"msg_type":"dexList","fee":80000000000,"fee_for":2},{"msg_type":"orderNew","fee":0,"fee_for":3},{"msg_type":"orderCancel","fee":0,"fee_for":3},{"msg_type":"issueMsg","fee":40000000000,"fee_for":2},{"msg_type":"mintMsg","fee":20000000000,"fee_for":2},{"msg_type":"tokensBurn","fee":100000000,"fee_for":1},{"msg_type":"tokensFreeze","fee":1000000,"fee_for":1},{"fixed_fee_params":{"msg_type":"send","fee":125000,"fee_for":1},"multi_transfer_fee":100000,"lower_limit_as_multi":2},{"dex_fee_fields":[{"fee_name":"ExpireFee","fee_value":100000},{"fee_name":"ExpireFeeNative","fee_value":20000},{"fee_name":"CancelFee","fee_value":100000},{"fee_name":"CancelFeeNative","fee_value":20000},{"fee_name":"FeeRate","fee_value":1000},{"fee_name":"FeeRateNative","fee_value":400},{"fee_name":"IOCExpireFee","fee_value":50000},{"fee_name":"IOCExpireFeeNative","fee_value":10000}]},{"msg_type":"create_validator","fee":1000000000,"fee_for":1},{"msg_type":"remove_validator","fee":100000000,"fee_for":1}]';

    cmcApi = 'https://api.coinmarketcap.com/v1/ticker/binance-coin/';
    cmcResp = '[{"id": "binance-coin","name": "Binance Coin","symbol": "BNB","rank": "7","price_usd": "33.7137224691","price_btc": "0.00422775","24h_volume_usd": "645554815.169","market_cap_usd": "4759551297.0","available_supply": "141175490.0","total_supply": "189175490.0","max_supply": null,"percent_change_1h": "0.07","percent_change_24h": "-1.1","percent_change_7d": "16.88", "last_updated": "1558855144" }]';
    cmcApiAll = 'https://api.coinmarketcap.com/v1/global-metrics/quotes/latest';

    public bnbData;
    public numCrypto;

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
    public dex_fee_fields;
    public create_validator;
    public remove_validator;

    public resp;
    public respArray;

  constructor() {

    this.getFees();
    this.getPrice();
    // this.getNum();
    // console.log(this.fixed_fee_params);
    // console.log(this.fixed_fee_params.fixed_fee_params.fee);
    // console.log(this.vote.fee);

  }

  /** JSON Parser */
getFees() {

  if(this.mainnet){
    const dexResp = this.getJSON(this.dexApi);

    if  (dexResp.message == 'API rate limit exceeded'){
      this.respArray = JSON.parse(this.dexResp.toString());
    } else {
      this.respArray = JSON.parse(dexResp.toString());
    }
  } else {
    const dexResp = this.getJSON(this.testDexApi);

    if  (dexResp.message == 'API rate limit exceeded'){
      this.respArray = JSON.parse(this.testDexResp.toString());
    } else {
      this.respArray = JSON.parse(dexResp.toString());
    }
  }


  // console.log('dexRespArray', this.respArray);

  for (let i in this.respArray){
    if (this.respArray[i].msg_type=='submit_proposal'){
      this.submit_proposal = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='deposit'){
      this.deposit = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='vote'){
      this.vote = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='create_validator'){
      this.create_validator = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='remove_validator'){
      this.remove_validator = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='dexList'){
      this.dexList = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='orderNew'){
      this.orderNew = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='orderCancel'){
      this.orderCancel = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='issueMsg'){
      this.issueMsg = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='mintMsg'){
      this.mintMsg = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='tokensBurn'){
      this.tokensBurn = this.respArray[i];
    }
    if (this.respArray[i].msg_type=='tokensFreeze'){
      this.tokensFreeze = this.respArray[i];
    }
    if (this.respArray[i].fixed_fee_params){
      this.fixed_fee_params = this.respArray[i];
    }
    if (this.respArray[i].dex_fee_fields){
      this.dex_fee_fields = this.respArray[i];
    }
  }
}

getPrice(){
  console.log(this.cmcApi);
  const result = this.getJSON(this.cmcApi);
  console.log(result);
  const res = JSON.parse(result.toString());
  // console.log('result', res);
  this.bnbData = res[0];
  // console.log('price', this.bnbPrice);
}

// getNum(){
//   console.log(this.cmcApi);
//   const result = this.getJSON(this.cmcApiAll);
//   console.log(result);
//   const res = JSON.parse(result.toString());
//   // console.log('result', res);
//   this.numCrypto = res[0].active_cryptocurrencies;
//    console.log('num', this.numCrypto);
// }


/** JSON Parser */
getJSON(url) {
  let resp;
  let xmlHttp;
  resp = '';
  xmlHttp = new XMLHttpRequest();
  if (xmlHttp != null) {
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    resp = xmlHttp.responseText;
  }
  return resp;
}


}

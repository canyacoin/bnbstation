import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeenodeService {

    public mainnet: boolean;

    dexApi = 'https://dex.binance.org/api/v1/fees';
    testDexApi = 'https://testnet-dex.binance.org/api/v1/fees';

    timeApi = 'https://dex.binance.org/api/v1/time';
    validatorApi = 'https://dex.binance.org/api/v1/validators';
    nodeApi = 'https://dex.binance.org/api/v1/node-info';
    peerApi = 'https://dex.binance.org/api/v1/peers';

    dexResp = '[{"msg_type":"submit_proposal","fee":1000000000,"fee_for":1},{"msg_type":"deposit","fee":125000,"fee_for":1},{"msg_type":"vote","fee":0,"fee_for":3},{"msg_type":"create_validator","fee":1000000000,"fee_for":1},{"msg_type":"remove_validator","fee":100000000,"fee_for":1},{"msg_type":"dexList","fee":200000000000,"fee_for":2},{"msg_type":"orderNew","fee":0,"fee_for":3},{"msg_type":"orderCancel","fee":0,"fee_for":3},{"msg_type":"issueMsg","fee":100000000000,"fee_for":2},{"msg_type":"mintMsg","fee":20000000000,"fee_for":2},{"msg_type":"tokensBurn","fee":100000000,"fee_for":1},{"msg_type":"tokensFreeze","fee":1000000,"fee_for":1},{"fixed_fee_params":{"msg_type":"send","fee":62500,"fee_for":1},"multi_transfer_fee":50000,"lower_limit_as_multi":2},{"dex_fee_fields":[{"fee_name":"ExpireFee","fee_value":50000},{"fee_name":"ExpireFeeNative","fee_value":10000},{"fee_name":"CancelFee","fee_value":50000},{"fee_name":"CancelFeeNative","fee_value":10000},{"fee_name":"FeeRate","fee_value":1000},{"fee_name":"FeeRateNative","fee_value":400},{"fee_name":"IOCExpireFee","fee_value":25000},{"fee_name":"IOCExpireFeeNative","fee_value":5000}]}]';

    testDexResp =
    '[{"msg_type":"submit_proposal","fee":1000000000,"fee_for":1},{"msg_type":"deposit","fee":125000,"fee_for":1},{"msg_type":"vote","fee":0,"fee_for":3},{"msg_type":"dexList","fee":80000000000,"fee_for":2},{"msg_type":"orderNew","fee":0,"fee_for":3},{"msg_type":"orderCancel","fee":0,"fee_for":3},{"msg_type":"issueMsg","fee":40000000000,"fee_for":2},{"msg_type":"mintMsg","fee":20000000000,"fee_for":2},{"msg_type":"tokensBurn","fee":100000000,"fee_for":1},{"msg_type":"tokensFreeze","fee":1000000,"fee_for":1},{"fixed_fee_params":{"msg_type":"send","fee":125000,"fee_for":1},"multi_transfer_fee":100000,"lower_limit_as_multi":2},{"dex_fee_fields":[{"fee_name":"ExpireFee","fee_value":100000},{"fee_name":"ExpireFeeNative","fee_value":20000},{"fee_name":"CancelFee","fee_value":100000},{"fee_name":"CancelFeeNative","fee_value":20000},{"fee_name":"FeeRate","fee_value":1000},{"fee_name":"FeeRateNative","fee_value":400},{"fee_name":"IOCExpireFee","fee_value":50000},{"fee_name":"IOCExpireFeeNative","fee_value":10000}]},{"msg_type":"create_validator","fee":1000000000,"fee_for":1},{"msg_type":"remove_validator","fee":100000000,"fee_for":1}]';

    timeResp =
    '{"ap_time":"2019-05-27T07:55:25Z","block_time":"2019-05-27T07:55:25Z"}';

    valResp =  '{"block_height":8608024,"validators":[{"address":"1175946A48EAA473868A0A6F52E6C66CCAF472EA","pub_key":[22,36,222,100,32,211,118,157,138,31,120,180,193,122,150,95,122,48,212,24,31,171,189,31,150,159,70,211,200,232,59,90,212,132,84,33,216],"voting_power":1000000000000},{"address":"14CFCE69B645F3F88BAF08EA5B77FA521E4480F9","pub_key":[22,36,222,100,32,43,164,232,21,66,244,55,183,174,31,138,53,221,178,51,199,137,168,220,34,115,67,119,217,182,214,58,241,202,64,59,97],"voting_power":1000000000000},{"address":"17B42E8F284D3CA0E420262F89CD76C749BB12C9","pub_key":[22,36,222,100,32,223,141,168,197,171,253,179,133,149,57,19,8,187,113,229,161,224,170,189,193,208,207,56,49,93,80,214,190,147,155,38,6],"voting_power":1000000000000},{"address":"3CD4AABABDDEB7ABFEA9618732E331077A861D2B","pub_key":[22,36,222,100,32,182,97,158,220,164,20,52,132,128,2,129,214,152,183,12,147,94,145,82,173,87,179,29,133,192,95,47,121,246,75,57,243],"voting_power":1000000000000},{"address":"414FB3BBA216AF84C47E07D6EBAA2DCFC3563A2F","pub_key":[22,36,222,100,32,148,70,209,74,216,108,141,45,116,120,11,8,71,17,0,1,161,194,226,82,238,223,234,71,83,235,187,252,227,162,47,82],"voting_power":1000000000000},{"address":"71F253E6FEA9EDD4B4753F5483549FE4F0F3A21C","pub_key":[22,36,222,100,32,3,83,198,57,248,12,200,1,89,68,67,109,171,16,50,36,93,68,249,18,237,195,30,246,104,255,159,74,69,205,5,153],"voting_power":1000000000000},{"address":"7235EF143D20FC0ABC427615D83014BB02D7C06C","pub_key":[22,36,222,100,32,232,29,55,151,224,84,76,58,113,142,31,5,240,251,120,34,18,226,72,231,132,193,168,81,190,135,231,122,224,219,35,14],"voting_power":1000000000000},{"address":"A71E5CD078B8C5C7B1AF88BCE84DD70B0557D93E","pub_key":[22,36,222,100,32,94,63,205,163,11,209,157,69,196,183,54,136,218,53,231,218,31,206,124,104,89,178,193,242,14,213,32,45,36,20,78,62],"voting_power":1000000000000},{"address":"A9157B3FA6EB4C1E396B9B746E95327A07DC42E5","pub_key":[22,36,222,100,32,176,106,89,162,215,91,245,208,20,252,231,201,153,181,231,30,122,150,8,112,247,37,132,125,75,163,35,91,174,170,8,239],"voting_power":1000000000000},{"address":"B0FBB52FF7EE93CC476DFE6B74FA1FC88584F30D","pub_key":[22,36,222,100,32,12,145,14,47,230,80,228,224,20,6,179,49,11,72,159,182,10,132,188,63,245,197,190,227,165,109,88,152,182,168,175,50],"voting_power":1000000000000},{"address":"B7707D9F593C62E85BB9E1A2366D12A97CD5DFF2","pub_key":[22,36,222,100,32,113,242,215,184,236,28,139,153,166,83,66,155,1,24,205,32,31,121,79,64,157,15,234,77,101,177,182,98,242,176,0,99],"voting_power":1000000000000}]}';

    nodeResp = '{"node_info":{"id":"e49f3105dd7bd3fefaf7e98d37653bf48fcac1cc","listen_addr":"10.213.31.141:27146","network":"Binance-Chain-Tigris","version":"0.30.1","channels":"3540202122233038","moniker":"Scafell","other":{"amino_version":"","p2p_version":"","consensus_version":"","rpc_version":"","tx_index":"on","rpc_address":"tcp://0.0.0.0:27147"}},"sync_info":{"latest_block_hash":"2F3A454D243F4306D04EE42AA1A2803F604B19910042030B8B5F561F8D82ADC4","latest_app_hash":"C48191F4C2BBC65845666EABED432195AB4AD70F9EA6EB58E75EBDEDF9AA8620","latest_block_height":8794740,"latest_block_time":"2019-05-27T07:58:16.979420296Z","catching_up":false},"validator_info":{"address":"14CFCE69B645F3F88BAF08EA5B77FA521E4480F9","pub_key":[43,164,232,21,66,244,55,183,174,31,138,53,221,178,51,199,137,168,220,34,115,67,119,217,182,214,58,241,202,64,59,97],"voting_power":1000000000000}}';

    peerResp =
    '[{"accelerated":true,"access_addr":"https://dex.binance.org:443","capabilities":["qs","ap","ws"],"id":"gateway-ingress","listen_addr":"https://dex.binance.org:443","moniker":"gateway-ingress","network":"gateway","stream_addr":"wss://dex.binance.org","version":"1.0.0"},{"access_addr":"https://seed1.ciscox.io:443","capabilities":["node"],"id":"bb721fe089e83d42bcb8f629f8efe0e4af888fde","listen_addr":"https://seed1.ciscox.io:443","moniker":"seed","network":"Binance-Chain-Tigris","original_listen_addr":"52.197.88.253:27146","version":"0.30.1"},{"access_addr":"https://dataseed1.binance.org:443","capabilities":["node"],"id":"782303c9060d46211225662fdd1dd411c638263a","listen_addr":"https://dataseed1.binance.org:443","moniker":"data-seed-0","network":"Binance-Chain-Tigris","original_listen_addr":"52.197.243.252:27146","version":"0.30.1"},{"access_addr":"https://dataseed2.binance.org:443","capabilities":["node"],"id":"e2acf608686f830386e8648d6fc2f50c3316aa88","listen_addr":"https://dataseed2.binance.org:443","moniker":"data-seed-1","network":"Binance-Chain-Tigris","original_listen_addr":"13.113.112.169:27146","version":"0.30.1"},{"access_addr":"https://dataseed3.binance.org:443","capabilities":["node"],"id":"b7affdf084115fd7e7cdbc04686ef8c218e1801c","listen_addr":"https://dataseed3.binance.org:443","moniker":"data-seed-2","network":"Binance-Chain-Tigris","original_listen_addr":"52.199.222.255:27146","version":"0.30.1"},{"access_addr":"https://dataseed4.binance.org:443","capabilities":["node"],"id":"0fd066de431d13e5613aba53b3ed25c5a7a0b67c","listen_addr":"https://dataseed4.binance.org:443","moniker":"data-seed-3","network":"Binance-Chain-Tigris","original_listen_addr":"13.114.123.99:27146","version":"0.30.1"},{"access_addr":"https://dataseed5.binance.org:443","capabilities":["node"],"id":"98579505572cc85488caa403bebb62e5b61d68e0","listen_addr":"https://dataseed5.binance.org:443","moniker":"data-seed-4","network":"Binance-Chain-Tigris","original_listen_addr":"52.68.173.59:27146","version":"0.30.1"}]';

    public genesis='Apr-18-2019 15:59:26';

    cmcApi = 'https://api.coinmarketcap.com/v1/ticker/binance-coin/';
    cmcResp = '[{"id": "binance-coin","name": "Binance Coin","symbol": "BNB","rank": "7","price_usd": "33.7137224691","price_btc": "0.00422775","24h_volume_usd": "645554815.169","market_cap_usd": "4759551297.0","available_supply": "141175490.0","total_supply": "189175490.0","max_supply": null,"percent_change_1h": "0.07","percent_change_24h": "-1.1","percent_change_7d": "16.88", "last_updated": "1558855144" }]';
    cmcApiAll = 'https://api.coinmarketcap.com/v1/global-metrics/quotes/latest';

    public bnbData;
    public numCrypto;
    public bncData;
    public bncTime;
    public bncVal;

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
    this.mainnet=true;
    this.getFees();
    this.getPrice();
    this.getTime();
    this.getVal();
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
  const result = this.getJSON(this.cmcApi);
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

getTime(){
  const result = this.getJSON(this.timeApi);
  if  (result == 'API rate limit exceeded'){
    this.bncTime = JSON.parse(this.timeResp.toString());
  } else {
    this.bncTime = JSON.parse(result.toString());
  }
}

getVal(){
  const result = this.getJSON(this.validatorApi);
  if  (result == 'API rate limit exceeded'){
    this.bncVal = JSON.parse(this.valResp.toString());
  } else {
    this.bncVal = JSON.parse(result.toString());
  }
  console.log(this.bncVal);
}


}

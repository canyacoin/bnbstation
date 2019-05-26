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

  constructor(private feenodeservice: FeenodeService) {

   }

  ngOnInit() {

    this.bnbData = this.feenodeservice.bnbData;
    this.volume = +this.getValues(this.bnbData, '24h_volume_usd');

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

}

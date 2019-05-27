import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeenodeService } from '../feenode.service';

import '../../assets/css/styles.css';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {

  constructor(private router: Router, private feenodeservice: FeenodeService) { }


  ngOnInit() {


  //   setTimeout( () => {
  //
  //   }, 2000
  //
  // );
  //   // removes the backdrop on link click
  //   $('.nav-link').click(function() {
  //       $('.topbar-backdrop').click();
  //   });
  }

}

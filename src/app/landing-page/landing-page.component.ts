import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from './../../services/loader.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public router: Router, public loader: LoaderService) { }

  ngOnInit() {
    this.loader.hide();
  }

  navigatePage(){
    this.router.navigateByUrl('app');
  }
}

import {Component, OnInit} from '@angular/core';
import * as smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() {
    smoothscroll.polyfill();
  }

  ngOnInit() {
  }

  scroll() {
    const el = document.getElementById('main-section');
    el.scrollIntoView({behavior: 'smooth'});
  }
}

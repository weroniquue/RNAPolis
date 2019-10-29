import {Component, OnInit} from '@angular/core';
import * as smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

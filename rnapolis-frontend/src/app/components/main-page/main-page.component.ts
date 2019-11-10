import { Component, OnInit } from '@angular/core';
import {Tool} from '../../entity/tool';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  tools: Tool[];

  constructor() {
    this.tools  = [
      new Tool('Tool1', 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
        'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
        'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
        ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
        'quidem quo quod, ratione recusandae reiciendis.',
        'https://www.google.com'),
      new Tool('RNA FRABASE', 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
        'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
        'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
        ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
        'quidem quo quod, ratione recusandae reiciendis.',
        'https://www.google.com'),
      new Tool('RNA FRABASE', 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
        'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
        'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
        ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
        'quidem quo quod, ratione recusandae reiciendis.',
        'https://www.google.com')
    ];
  }

  ngOnInit() {
  }

}

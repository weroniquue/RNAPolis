import {Component, OnInit} from '@angular/core';
import {Tool} from '../../entity/tool';
import {MatDialog} from "@angular/material";
import {AddToolComponent} from "./tools-utils/add-tool/add-tool.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  tools: Tool[];
  categories: string[];
  selectedCategory: string;
  canEdit = false;

  constructor(public dialog: MatDialog) {
    this.tools = [
      {
        toolName: 'Tool1', description: 'Lorem ipsum dolor sit amet, consectetur ' +
          'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
          'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
          'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
          ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
          'quidem quo quod, ratione recusandae reiciendis.',
        link: 'https://www.google.com',
        category: 'category1'
      },
      {
        toolName: 'RNA FRABASE', description: 'Lorem ipsum dolor sit amet, consectetur ' +
          'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
          'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
          'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
          ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
          'quidem quo quod, ratione recusandae reiciendis.',
        link: 'https://www.google.com',
        category: 'category1'
      },
      {
        toolName: 'RNA 2', description: 'Lorem ipsum dolor sit amet, consectetur ' +
          'adipisicing elit. Ab amet animi aspernatur blanditiis culpa cumque dolores dolorum ' +
          'ducimus esse magnam pariatur, praesentium quae quasi quidem quo quod, ratione recusandae ' +
          'reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi aspernatur' +
          ' blanditiis culpa cumque dolores dolorum ducimus esse magnam pariatur, praesentium quae quasi ' +
          'quidem quo quod, ratione recusandae reiciendis.',
        link: 'https://www.google.com',
        category: 'category12'
      }
    ];
    this.categories = ['category12', 'category1'];
  }

  ngOnInit() {
  }

  changeCanEdit() {
    this.canEdit = true;
  }

  save() {
  }

  addTool(): void {
    const dialogRef = this.dialog.open(AddToolComponent, {
      // width: '250px',
      data: this.categories
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log(result.value);
        this.tools.push(result.value);
      }
    });
  }
}

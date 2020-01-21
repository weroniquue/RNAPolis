import {Component, OnInit} from '@angular/core';
import {Tool} from '../../entity/tool';
import {MatDialog} from '@angular/material';
import {AddToolComponent} from './tools-utils/add-tool/add-tool.component';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {User} from "../../entity/user";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  tools: Tool[];
  categories: string[];
  selectedCategory: string;
  user: User;

  constructor(public dialog: MatDialog,
              public authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.user = value);
    this.tools = [
      {
        id: '1',
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
        id: '2',
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
        id: '3',
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
    Utils.closeMenu();
  }

  addTool(): void {
    const dialogRef = this.dialog.open(AddToolComponent, {
      width: '80vw',
      panelClass: 'form-dialog-container',
      data: [this.categories, {}]
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.valid) {
        this.tools.push(result.value);
      }
    });
  }

  removeTool(tool: Tool) {
    this.tools.splice(this.tools.indexOf(tool), 1);
  }

  refreshTool(tool: Tool) {
    const targetIdx = this.tools.map(item => item.id).indexOf(tool.id);
    this.tools[targetIdx] = tool;
  }
}

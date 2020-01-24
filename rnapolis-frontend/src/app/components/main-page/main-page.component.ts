import {Component, OnInit} from '@angular/core';
import {Tool} from '../../entity/tool';
import {MatDialog} from '@angular/material';
import {AddToolComponent} from './tools-utils/add-tool/add-tool.component';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {User} from '../../entity/user';
import {ToolsService} from '../../services/tools.service';
import {NotifierService} from 'angular-notifier';
import {Award} from '../../entity/award';
import {EditAwardsComponent} from '../awards-timeline/edit-awards/edit-awards.component';

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
  notifier: NotifierService;

  constructor(public dialog: MatDialog,
              public authenticationService: AuthenticationService,
              public toolsService: ToolsService,
              private readonly notifierService: NotifierService) {
    this.notifier = notifierService;
    this.authenticationService.currentUser.subscribe(value => this.user = value);

    this.categories = ['category12', 'category1'];
  }

  ngOnInit() {
    Utils.closeMenu();
    this.toolsService.getTools().subscribe(tools => {
      this.tools = tools;
    });
  }

  addTool(): void {
    const dialogRef = this.dialog.open(AddToolComponent, {
      disableClose: true,
      width: '80vw',
      panelClass: 'form-dialog-container',
      data: [this.categories, {}]
    });
    dialogRef.afterClosed().subscribe(newTool => {
      if (newTool) {
        this.toolsService.addTool(newTool).subscribe(
          createdTool => {
            this.tools.push(createdTool);
            this.tools.sort((a, b) => a.name > b.name ? 1 : -1);
            this.notifier.notify('success', 'Successfully added an tool!');
          },
          error => {
            this.notifier.notify('error', 'Failed to add an tool!');
          });
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

import {Component, OnInit} from '@angular/core';
import {Tool} from '../../entity/tool';
import {MatDialog} from '@angular/material';
import {AddToolComponent} from './tools-utils/add-tool/add-tool.component';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {User} from '../../entity/user';
import {ToolsService} from '../../services/tools.service';
import {NotifierService} from 'angular-notifier';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
  changeOrderOption = false;
  notifier: NotifierService;

  constructor(public dialog: MatDialog,
              public authenticationService: AuthenticationService,
              public toolsService: ToolsService,
              private readonly notifierService: NotifierService) {
    this.notifier = notifierService;
    this.authenticationService.currentUser.subscribe(value => {
      this.user = value;
      if (value == null) {
        this.changeOrderOption = false;
      }
    });
    this.categories = ['RNA sequence', 'RNA secondary structure', 'RNA tertiary sequence'];
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
      data: [this.categories, {order: -this.tools.length}]
    });
    dialogRef.afterClosed().subscribe(newTool => {
      if (newTool) {
        this.toolsService.addTool(newTool).subscribe(
          createdTool => {
            this.tools.unshift(createdTool);
            this.notifier.notify('success', 'Successfully added the tool!');
          },
          () => {
            this.notifier.notify('error', 'Failed to add the tool!');
          });
      }
    });
  }

  removeTool(tool: Tool): void  {
    this.tools.splice(this.tools.indexOf(tool), 1);
    this.toolsService.updateToolsOrder(this.tools).subscribe();
  }

  refreshTool(tool: Tool): void {
    const targetIdx = this.tools.map(item => item.id).indexOf(tool.id);
    this.tools[targetIdx] = tool;
  }

  changeOrderAndMove(event: CdkDragDrop<any, any>): void {
    moveItemInArray(this.tools, event.previousIndex, event.currentIndex);
  }

  changeOrder(): void {
    this.changeOrderOption = true;
  }

  saveOrder(): void {
    this.toolsService.updateToolsOrder(this.tools).subscribe(
      () => this.notifier.notify('success', 'Successfully ordered the tools!'),
      () => this.notifier.notify('error', 'Failed to order the tools!'));
    this.changeOrderOption = false;
  }
}

import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Tool} from '../../../../entity/tool';
import {DOCUMENT} from '@angular/common';
import {AddToolComponent} from '../add-tool/add-tool.component';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../basic-components/confirmation-dialog/confirmation-dialog.component';
import {NotifierService} from 'angular-notifier';
import {ToolsService} from '../../../../services/tools.service';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  @Input() tool: Tool;
  @Input() categories: string[];
  @Input() canEdit: boolean;
  @Output() toolRemoved = new EventEmitter<Tool>();
  @Output() toolChanged = new EventEmitter<Tool>();

  notifier: NotifierService;

  constructor(@Inject(DOCUMENT) private document: Document,
              public toolsService: ToolsService,
              public dialog: MatDialog,
              private readonly notifierService: NotifierService) {

    this.notifier = notifierService;
  }

  ngOnInit() {
  }

  redirectToUrl(url: string): void {
    url = !url.match(/^https?:/) ? '//' + url : url;
    window.open(url, '_blank');
  }

  deleteTool(): void {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this tool?']
    });
    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toolsService.deleteTool(this.tool.id).subscribe(
          () => {
            this.toolRemoved.emit(this.tool);
            this.notifier.notify('success', 'Successfully deleted an tool!');
          },
          () => {
            this.notifier.notify('error', 'Failed to delete an tool!');
          });
      }
    });
  }

  editTool() {
    const dialogRef = this.dialog.open(AddToolComponent, {
      disableClose: true,
      width: '80vw',
      panelClass: 'form-dialog-container',
      data: [this.categories, this.tool]
    });
    dialogRef.afterClosed().subscribe(result => {
      this.toolsService.updateTool(result.id, result).subscribe(
        editedTool => {
          this.toolChanged.emit(editedTool);
          this.notifier.notify('success', 'Successfully edited an tool!');
        },
        () => {
          this.notifier.notify('error', 'Failed to edit an tool!');
        });
    });
  }
}

import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Tool} from '../../../../entity/tool';
import {DOCUMENT} from '@angular/common';
import {AddToolComponent} from '../add-tool/add-tool.component';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../basic-components/confirmation-dialog/confirmation-dialog.component';
import {AuthenticationService} from '../../../../services/authentication.service';
import {User} from '../../../../entity/user';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  @Input() tool: Tool;
  @Input() categories: string[];
  currentUser: User;
  @Output() toolRemoved = new EventEmitter<Tool>();
  @Output() toolChanged = new EventEmitter<Tool>();

  constructor(@Inject(DOCUMENT) private document: Document,
              public dialog: MatDialog,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
  }

  redirectToUrl(url: string): void {
    window.open(url, '_blank');
  }

  deleteTool(): void {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this tool?']
    });
    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO remove from db
        this.toolRemoved.emit(this.tool);
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
      this.tool = result;
      // TODO save changes in db
      this.toolChanged.emit(this.tool);
    });
  }
}

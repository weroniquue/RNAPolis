import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Tool} from '../../../../entity/tool';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {
  @Input() tool: Tool;
  @Input() categories: string[];
  @Output() toolChanged = new EventEmitter<Tool>();
  canEdit = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  redirectToUrl(url: string): void {
    window.open(url, '_blank');
  }

  deleteTool(): void {
    // TODO remove from db
    this.toolChanged.emit(this.tool);
  }

  saveChanges(): void {
    // TODO save to db
    this.canEdit = false;
  }

  changeCanEdit() {
    this.canEdit = true;
  }
}

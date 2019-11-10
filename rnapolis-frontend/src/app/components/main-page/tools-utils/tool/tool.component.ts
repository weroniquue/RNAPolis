import {Component, Inject, Input, OnInit} from '@angular/core';
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
  canEdit = true;
  selectedCategory: string;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  redirectToUrl(url: string): void {
    window.open(url, '_blank');
  }

  deleteTool(tool: Tool): void {
    console.log(tool);
  }

  saveChanges(tool: Tool): void {
    console.log(tool);
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent implements OnInit {
  @Input() content: string;
  @Input() url: string;

  constructor() {
  }

  ngOnInit() {
  }

  redirectToUrl(url: string): void {
    url = !url.match(/^https?:/) ? '//' + url : url;
    window.open(url, '_blank');
  }

}

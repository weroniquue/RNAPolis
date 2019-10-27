import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ESC = 'Escape';
  isChecked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === this.ESC && this.isChecked) {
        this.isChecked = false;
    }
  }
}

import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {User} from '../../../entity/user';
import {Router} from '@angular/router';
import Utils from '../../../services/utils';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ESC = 'Escape';
  isChecked: boolean;
  currentUser: User;
  notifier: NotifierService;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private readonly notifierService: NotifierService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    this.notifier = notifierService;
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === this.ESC && this.isChecked) {
      this.isChecked = false;
    }
  }

  logout() {
    this.authenticationService.logout();
    Utils.closeMenu();
    this.notifier.notify('success', 'Logged out successfully!');
  }

  changeChecked() {
    const el = document.getElementById('close-menu') as HTMLInputElement;
    this.isChecked = el.checked;
  }
}

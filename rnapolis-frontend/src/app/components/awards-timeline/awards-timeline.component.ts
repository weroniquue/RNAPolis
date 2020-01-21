import {Component, HostListener, OnInit} from '@angular/core';
import {Award} from '../../entity/award';
import {MatDialog} from '@angular/material';
import {ConfirmationDialogComponent} from '../basic-components/confirmation-dialog/confirmation-dialog.component';
import {EditAwardsComponent} from './edit-awards/edit-awards.component';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {AwardsService} from '../../services/awards.service';
import {NotifierService} from 'angular-notifier';
import {User} from '../../entity/user';

@Component({
  selector: 'app-awards-timeline',
  templateUrl: './awards-timeline.component.html',
  styleUrls: ['./awards-timeline.component.scss']
})
export class AwardsTimelineComponent implements OnInit {
  awards: Award[];
  user: User;
  notifier: NotifierService;

  constructor(public dialog: MatDialog,
              public authenticationService: AuthenticationService,
              public awardsService: AwardsService,
              private readonly notifierService: NotifierService) {
    this.authenticationService.currentUser.subscribe(value => this.user = value);
    this.notifier = notifierService;
  }

  ngOnInit() {
    Utils.closeMenu();
    this.onScrollEvent();
    this.awardsService.getAwards()
    .subscribe(awards => {
      this.awards = awards;
    });
  }

  @HostListener('window:resize', [])
  @HostListener('window:load', [])
  @HostListener('window:reload', [])
  @HostListener('window:scroll', []) onScrollEvent() {
    document.querySelectorAll('#timeline li').forEach(item => {
      function isInViewport(element: Element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });
  }

  deleteElement(award: Award) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this award?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.awardsService.deleteAward(award.id).subscribe(
          response => {
            this.awards.splice(this.awards.indexOf(award), 1);
            this.notifier.notify('success', 'Successfully deleted an award!');
          },
          error => {
            this.notifier.notify('error', 'Failed to delete an award!');
          });
      }
    });
  }

  editAward(award: Award) {
    const editDialogRef = this.openAwardDialog(award);

    editDialogRef.afterClosed().subscribe(result => {
      this.awardsService.updateAward(result.id, result).subscribe(
        editedAward => {
          this.awards[this.awards.indexOf(editedAward)] = editedAward;
          this.notifier.notify('success', 'Successfully edited an award!');
        },
        error => {
          this.notifier.notify('error', 'Failed to edit an award!');
        });
    });
  }

  addAward() {
    const addAwardDialogRef = this.openAwardDialog({id: '', year: null, description: ''});
    addAwardDialogRef.afterClosed().subscribe(newAward => {
      if (newAward.year != null) {
        this.awardsService.addAward(newAward).subscribe(
          createdAward => {
            this.awards.unshift(createdAward);
            this.notifier.notify('success', 'Successfully added an award!');
          },
          error => {
            this.notifier.notify('error', 'Failed to add an award!');
          });
      }
    });
  }

  openAwardDialog(award: Award) {
    return this.dialog.open(EditAwardsComponent, {
      disableClose: true,
      panelClass: 'form-dialog-container',
      width: '80vw',
      data: award
    });
  }
}


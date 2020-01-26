import {Component, OnInit} from '@angular/core';
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
  awards: Map<number, Award[]> = new Map<number, Award[]>();
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
    this.awardsService.getAwards()
      .subscribe(awards => {
        this.awards.set(awards[0], awards[1]);
      });
  }

  deleteElement(award: Award) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this award?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(award);
        this.awardsService.deleteAward(award.id).subscribe(
          () => {
            this.awards.get(award.year).splice(this.awards.get(award.year).indexOf(award), 1);
            this.notifier.notify('success', 'Successfully deleted the award!');
          },
          () => {
            this.notifier.notify('error', 'Failed to delete the award!');
          });
      }
    });
  }

  editAward(award: Award) {
    const oldAward = award.year;
    const editDialogRef = this.openAwardDialog(award);

    editDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.awardsService.updateAward(result.id, result).subscribe(
          () => {
            this.shuffleAwards(result);
            if (this.awards.get(oldAward).length === 1) {
              this.awards.get(oldAward).splice(0, this.awards.get(oldAward).length);
            }
            this.notifier.notify('success', 'Successfully edited the award!');
          },
          () => {
            this.notifier.notify('error', 'Failed to edit the award!');
          });
      }
    });
  }

  addAward() {
    const addAwardDialogRef = this.openAwardDialog({id: null, year: null, description: ''});
    addAwardDialogRef.afterClosed().subscribe(newAward => {
      if (newAward) {
        this.awardsService.addAward(newAward).subscribe(
          () => {
            this.shuffleAwards(newAward);
            this.notifier.notify('success', 'Successfully added the award!');
          },
          () => {
            this.notifier.notify('error', 'Failed to add the award!');
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

  descOrder = (a, b) => {
    if (a.key < b.key) {
      return b.key;
    }
  }

  private shuffleAwards(newAward: Award): void {
    const year = this.awards.get(newAward.year);
    if (year) {
      year.push(newAward);
    } else {
      this.awards.set(newAward.year, Array.of(newAward));
    }
  }
}


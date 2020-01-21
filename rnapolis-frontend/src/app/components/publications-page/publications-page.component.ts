import {Component, OnInit} from '@angular/core';
import {Publication} from '../../entity/publication';
import {ConfirmationDialogComponent} from '../basic-components/confirmation-dialog/confirmation-dialog.component';
import {PublicationFormComponent} from './publication-form/publication-form.component';
import {MatDialog} from '@angular/material/dialog';
import Utils from '../../services/utils';
import {AuthenticationService} from '../../services/authentication.service';
import {NotifierService} from 'angular-notifier';
import {PublicationsService} from '../../services/publications.service';

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styleUrls: ['./publications-page.component.scss']
})
export class PublicationsPageComponent implements OnInit {
  publications: Publication[];
  canEdit: boolean;
  notifier: NotifierService;


  constructor(public authenticationService: AuthenticationService,
              public dialog: MatDialog,
              public publicationsService: PublicationsService,
              private readonly notifierService: NotifierService) {
    this.canEdit = this.authenticationService.ifLogin;
    this.notifier = notifierService;}

  ngOnInit() {
    Utils.closeMenu();
    this.publicationsService.getPublications()
    .subscribe(publications => {
      this.publications = publications;
    });
  }

  deleteElement(publication: Publication) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this publication?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publicationsService.deletePublication(publication.id).subscribe(
          () => {
            this.publications.splice(this.publications.indexOf(publication), 1);
            this.notifier.notify('success', 'Successfully deleted an publication!');
          },
          () => {
            this.notifier.notify('error', 'Failed to delete an publication!');
          });
      }
    });
  }

  editElement(publication: Publication) {
    const editDialogRef = this.openDialog(publication);

    editDialogRef.afterClosed().subscribe(result => {
      this.publicationsService.updatePublication(result.id, result).subscribe(
        editedPublication => {
          this.publications[this.publications.indexOf(editedPublication)] = editedPublication;
          this.notifier.notify('success', 'Successfully edited an publication!');
        },
        () => {
          this.notifier.notify('error', 'Failed to edit an publication!');
        });
    });
  }

  addElement() {
    const addPublicationDialogRef = this.openDialog({
      id: null,
      authors: '',
      title: '',
      journal: '',
      volumeIssue: '',
      year: null,
      pages: ''
    });
    addPublicationDialogRef.afterClosed().subscribe(newPublication => {
      if (newPublication.year != null) {
        this.publicationsService.addPublication(newPublication).subscribe(
          createdPublication => {
            this.publications.unshift(createdPublication);
            this.notifier.notify('success', 'Successfully added an publication!');
          },
          () => {
            this.notifier.notify('error', 'Failed to add an publication!');
          });
      }
    });
  }

  openDialog(publication: Publication) {
    return this.dialog.open(PublicationFormComponent, {
      disableClose: true,
      panelClass: 'form-dialog-container',
      width: '80vw',
      data: publication
    });
  }

}

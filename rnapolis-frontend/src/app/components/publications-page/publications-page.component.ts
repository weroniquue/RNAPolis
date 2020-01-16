import {Component, OnInit} from '@angular/core';
import {Publication} from '../../entity/Publication';
import {ConfirmationDialogComponent} from '../basic-components/confirmation-dialog/confirmation-dialog.component';
import {PublicationFormComponent} from './publication-form/publication-form.component';
import {MatDialog} from '@angular/material/dialog';
import Utils from '../../services/utils';
import {AuthenticationService} from '../../services/authentication.service';
import {NotifierService} from 'angular-notifier';

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
              private readonly notifierService: NotifierService) {
    this.canEdit = this.authenticationService.ifLogin;
    this.notifier = notifierService;
    this.publications = [
      {
        authors: 'Szachniuk M',
        title: 'RNApolis: computational platform for RNA structure analysis',
        journal: 'Foundations of Computing and Decision Sciences',
        volumeIssue: '44(2)',
        year: 2019,
        pages: '241-257'
      },
      {
        authors: 'Antczak M, Zablocki M, Zok T, Rybarczyk A, Blazewicz J, Szachniuk M',
        title: ' RNAvista: a webserver to assess RNA secondary structures with non-canonical base pairs',
        journal: 'Bioinformatics',
        volumeIssue: '35(1)',
        year: 2019,
        pages: '152-155'
      },
      {
        authors: 'Antczak M, Zok T, Osowiecki M, Popenda M, Adamiak RW, Szachniuk M',
        title: ' RNAfitme: a webserver for modeling nucleobase and nucleoside residue ' +
          'conformation in fixed-backbone RNA structures',
        journal: 'BMC Bioinformatics',
        volumeIssue: '19(1)',
        year: 2018,
        pages: '304'
      },
      {
        authors: 'Wiedemann J, Zok T, Milostan M, Szachniuk M',
        title: ' LCS-TA to identify similar fragments in RNA 3D structures',
        journal: 'BMC Bioinformatics',
        volumeIssue: '18',
        year: 2017,
        pages: '456'
      },
    ];
  }

  ngOnInit() {
    Utils.closeMenu();
  }

  deleteElement(publication: Publication) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this publication?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.publications.splice(this.publications.indexOf(publication), 1);
        // TODO save data in db
      }
    });
  }

  editElement(publication: Publication) {
    const editDialogRef = this.openDialog(publication);

    editDialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.publications[this.publications.indexOf(publication)] = result;
        // TODO save data in db
      }
    });
  }

  addElement() {
    const addPublicationDialogRef = this.openDialog({
      authors: '',
      title: '',
      journal: '',
      volumeIssue: '',
      year: null,
      pages: ''
    });
    addPublicationDialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.publications.unshift(result);
        // TODO save data in db
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

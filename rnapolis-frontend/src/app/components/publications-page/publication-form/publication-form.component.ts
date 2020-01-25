import {Component, Inject, OnInit} from '@angular/core';
import {Publication} from '../../../entity/publication';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent implements OnInit {
  form: FormGroup;
  publication: Publication;

  constructor(private fromBuilder: FormBuilder,
              public dialogRef: MatDialogRef<PublicationFormComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.publication = data;
  }

  ngOnInit() {
    this.form = this.fromBuilder.group({
      authors: [this.publication.authors, [Validators.required, AppComponent.noWhitespaceValidator]],
      title: [this.publication.title, [Validators.required, AppComponent.noWhitespaceValidator]],
      editors: [this.publication.editors],
      journal: [this.publication.journal, [Validators.required, AppComponent.noWhitespaceValidator]],
      volumeIssue: [this.publication.volumeIssue],
      publishers: [this.publication.publishers],
      year: [this.publication.year, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      pages: [this.publication.pages],
      link: [this.publication.link]
    });
  }

  saveClicked() {
    if (this.form.valid) {
      this.publication.authors = this.form.value.authors.trim();
      this.publication.title = this.form.value.title.trim();
      this.publication.editors = this.form.value.editors.trim();
      this.publication.journal = this.form.value.journal.trim();
      this.publication.volumeIssue = this.form.value.volumeIssue.trim();
      this.publication.publishers = this.form.value.publishers.trim();
      this.publication.year = this.form.value.year;
      this.publication.pages = this.form.value.pages.trim();
      this.publication.link = this.form.value.link.trim();
      this.dialogRef.close(this.publication);
    }
  }

  cancelClicked(): void {
    this.dialogRef.close(null);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }
}

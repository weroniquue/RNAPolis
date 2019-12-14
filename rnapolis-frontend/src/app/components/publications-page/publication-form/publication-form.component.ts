import {Component, Inject, OnInit} from '@angular/core';
import {Publication} from '../../../entity/Publication';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
      authors: [this.publication.authors, Validators.required],
      title: [this.publication.title, Validators.required],
      journal: [this.publication.journal, Validators.required],
      volumeIssue: [this.publication.volumeIssue, Validators.required],
      year: [this.publication.year, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(0|[1-9][0-9]*)$')]],
      pages: [this.publication.pages, Validators.required]
    });
  }

  saveClicked() {
    if (this.form.valid) {
      this.publication.authors = this.form.value.authors;
      this.publication.title = this.form.value.title;
      this.publication.journal = this.form.value.journal;
      this.publication.volumeIssue = this.form.value.volumeIssue;
      this.publication.year = this.form.value.year;
      this.publication.pages = this.form.value.pages;
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

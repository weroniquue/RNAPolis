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
      authors: [Validators.required],
      title: [Validators.required],
      journal: [Validators.required],
      volume_issue: [Validators.required],
      year: [this.publication.year, [Validators.required,
        Validators.pattern('^[0-9]$'),
        Validators.maxLength(4)]],
      pages: [this.publication.pages, Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      this.publication.authors = this.form.value.authors;
      this.publication.title = this.form.value.title;
      this.publication.journal = this.form.value.journal;
      this.publication.volume_issue = this.form.value.volume_issue;
      this.publication.year = this.form.value.year;
      this.publication.pages = this.form.value.pages;
      this.dialogRef.close(this.publication);
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.publication);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

}

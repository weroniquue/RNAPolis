import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Award} from '../../../entity/award';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-awards',
  templateUrl: './edit-awards.component.html',
  styleUrls: ['./edit-awards.component.scss']
})
export class EditAwardsComponent implements OnInit {

  awardForm: FormGroup;
  award: Award;

  constructor(private fromBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditAwardsComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.award = data;
  }

  ngOnInit() {
    this.awardForm = this.fromBuilder.group({
      year: [this.award.year,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{4}$')
        ])],
    description: [this.award.description, Validators.required]
  });
  }

  save() {
    if (this.awardForm.valid) {
      this.award.year = +this.awardForm.value.year;
      this.award.description = this.awardForm.value.description;
      this.dialogRef.close(this.award);
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.award);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.awardForm.controls[controlName].hasError(errorName);
  }
}

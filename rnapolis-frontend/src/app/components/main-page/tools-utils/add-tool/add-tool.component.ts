import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  toolForm: FormGroup;
  categories: string[];

  constructor(
    private fromBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddToolComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.categories = data;
  }

  ngOnInit() {
    this.toolForm = this.fromBuilder.group({
      toolName: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required],
      category: [null, Validators.required],
    });
  }

  save() {
    console.log(this.toolForm);
    if (this.toolForm.valid) {
      this.dialogRef.close(this.toolForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.toolForm.controls[controlName].hasError(errorName);
  }
}

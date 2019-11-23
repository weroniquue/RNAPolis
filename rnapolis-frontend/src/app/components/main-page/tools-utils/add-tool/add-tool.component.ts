import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Tool} from '../../../../entity/tool';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {
  tool: Tool;
  toolForm: FormGroup;
  categories: string[];

  constructor(
    private fromBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddToolComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.categories = data[0];
    this.tool = data[1];
  }

  ngOnInit() {
    this.toolForm = this.fromBuilder.group({
      id: this.tool.id,
      toolName: [this.tool.toolName, Validators.required],
      description: [this.tool.description, Validators.required],
      link: [this.tool.link, Validators.required],
      category: [this.tool.category, Validators.required],
    });
  }

  save() {
    console.log(this.toolForm);
    if (this.toolForm.valid) {
      this.dialogRef.close(this.toolForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close(this.toolForm.value);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.toolForm.controls[controlName].hasError(errorName);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  toolForm: FormGroup;
  categories: string[];
  selectedCategory: string;

  constructor(
    private fromBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddToolComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.categories = data;
  }

  ngOnInit() {
    this.toolForm = this.fromBuilder.group({
      toolName: '',
      description: '',
      link: '',
      category: null,
    });
  }
  save() {
    this.dialogRef.close(this.toolForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

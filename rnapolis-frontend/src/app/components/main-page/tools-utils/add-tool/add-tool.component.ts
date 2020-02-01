import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Tool} from '../../../../entity/tool';
import Utils from '../../../../services/utils';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {
  tool: Tool;
  toolForm: FormGroup;
  availableCategories: string[];
  dropdownSettings = {};

  constructor(
    private fromBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddToolComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.availableCategories = data[0];
    this.tool = data[1];
  }

  ngOnInit() {
    this.toolForm = this.fromBuilder.group({
      id: this.tool.id,
      name: [this.tool.name, [Validators.required, Utils.noWhitespaceValidator]],
      description: [this.tool.description, [Validators.required, Utils.noWhitespaceValidator]],
      link: [this.tool.link, [Validators.required]],
      categories: [this.tool.categories],
    });

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select categories',
      selectAllText: 'all',
      unSelectAllText: 'all',
      enableSearchFilter: true,
      defaultOpen: true
    };
  }

  save() {
    if (this.toolForm.valid) {
      this.dialogRef.close(this.toolForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.toolForm.controls[controlName].hasError(errorName);
  }
}

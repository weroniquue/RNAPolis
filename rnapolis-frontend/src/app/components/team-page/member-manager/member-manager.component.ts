import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TeamMember} from '../../../entity/team-member';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-member-manager',
  templateUrl: './member-manager.component.html',
  styleUrls: ['./member-manager.component.scss']
})
export class MemberManagerComponent implements OnInit {

  form: FormGroup;
  member: TeamMember;
  imageSrc: string;
  reader: FileReader;

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(private fromBuilder: FormBuilder,
              public dialogRef: MatDialogRef<MemberManagerComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.member = data;
    this.imageSrc = this.member.imagePath;
    this.reader = new FileReader();
  }

  ngOnInit() {
    this.form = this.fromBuilder.group({
      image: [this.member.imagePath],
      name: [this.member.name, [Validators.required, AppComponent.noWhitespaceValidator]],
      surname: [this.member.surname, [Validators.required, AppComponent.noWhitespaceValidator]],
      position: [this.member.position],
      description: [this.member.description]
    });
  }

  saveClicked() {
    if (this.form.valid) {
      this.member.imagePath = this.imageSrc;
      this.member.name = this.form.value.name;
      this.member.surname = this.form.value.surname;
      this.member.position = this.form.value.position;
      this.member.description = this.form.value.description;
      this.dialogRef.close(this.member);
    }
  }

  cancelClicked(): void {
    this.dialogRef.close(null);
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  }

  onChange(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      this.reader.onload = e => this.imageSrc = this.reader.result.toString();

      this.reader.readAsDataURL(file);
    }
  }

  setDefaultImage(member: TeamMember) {
    this.imageSrc = 'assets/not-found.jpg';
  }

}

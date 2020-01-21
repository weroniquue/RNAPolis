import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private readonly notifierService: NotifierService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    Utils.closeMenu();
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.errorMessage = '';
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.form.username.value, this.form.password.value)
    .pipe(first())
    .subscribe(
      () => {
        this.router.navigate(['']);
        this.notifierService.notify('success', 'Logged in successfully!');
      },
      errorResponse => {
        errorResponse.error.message ? this.errorMessage = errorResponse.error.message : this.errorMessage = errorResponse.statusText;
        this.loading = false;
      });
  }
}

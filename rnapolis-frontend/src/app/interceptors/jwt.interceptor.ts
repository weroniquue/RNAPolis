import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NotifierService} from 'angular-notifier';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private readonly notifierService: NotifierService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      this.handleTokenExpiration(currentUser.token);

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError(
        (err, caught) => {
          if (err.status === 401) {
            this.handleAuthError();
            return of(err);
          }
          throw err;
        }
      ),
    );
  }

  private handleAuthError() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  private handleTokenExpiration(token: string) {
    const jwtDecoder = new JwtHelperService();
    if (jwtDecoder.isTokenExpired(token)) {
      this.authenticationService.logout();
      this.notifierService.notify('error', 'Your session has expired!');
    }
  }
}

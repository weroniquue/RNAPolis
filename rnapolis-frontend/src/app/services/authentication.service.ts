import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../entity/user';
import {environment} from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get ifLogin(): boolean {
    // let currentUser = this.currentUserSubject.value;
    if(this.currentUserValue === null) return false;

    const jwtDecoder = new JwtHelperService();
    console.log(this.currentUserValue.token);
    return !jwtDecoder.isTokenExpired(this.currentUserValue.token);

  }

  // getToken(): string {
  //
  //   return ''
  // }
  //
  // isTokenExpired(token?: string): boolean {
  //   const helper = new JwtHelperService();
  //   const decodedToken = helper.decodeToken(myRawToken);
  // }
  //
  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);
  //
  //   if (decoded.exp === undefined) return null;
  //
  //   const date = new Date(0);
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, {username, password})
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

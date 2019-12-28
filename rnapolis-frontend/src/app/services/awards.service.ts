import {catchError, retry} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Award} from '../entity/award';
import {environment} from '../../environments/environment';

const apiUrl = `${environment.apiUrl}/api/awards`;

@Injectable({providedIn: 'root'})
export class AwardsService {

  constructor(private http: HttpClient) {
  }

  getAwards(): Observable<any> {
    return this.http.get<Award>(apiUrl).pipe(
      retry(1));
  }

  addAward(award: Award): Observable<Award> {
    return this.http.post<Award>(apiUrl, award)
    .pipe(
      catchError(this.handleError('addSmartphone', award))
    );
  }

  updateAward(id: any, award: Award): Observable<Award> {
    return this.http.put<Award>(apiUrl + '/' + id, award)
    .pipe(
      catchError(this.handleError('addSmartphone', award))
    );
  }

  deleteAward(id: any): Observable<Award> {
    return this.http.delete<Award>(apiUrl + '/' + id)
    .pipe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

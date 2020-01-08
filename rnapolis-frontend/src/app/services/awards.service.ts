import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Award} from '../entity/award';
import {environment} from '../../environments/environment';

const apiUrl = `${environment.apiUrl}/api/awards`;

@Injectable({providedIn: 'root'})
export class AwardsService {

  constructor(private http: HttpClient) {
  }

  getAwards(): Observable<any> {
    return this.http.get<Award>(apiUrl);
  }

  addAward(award: Award): Observable<Award> {
    return this.http.post<Award>(apiUrl, award);
  }

  updateAward(id: any, award: Award): Observable<Award> {
    return this.http.put<Award>(apiUrl + '/' + id, award);
  }

  deleteAward(id: any): Observable<Award> {
    return this.http.delete<Award>(apiUrl + '/' + id);
  }
}

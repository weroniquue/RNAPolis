import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Publication} from '../entity/publication';
import {environment} from '../../environments/environment';

const apiUrl = `${environment.apiUrl}/api/publications`;

@Injectable({providedIn: 'root'})
export class PublicationsService {

  constructor(private http: HttpClient) {
  }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(apiUrl);
  }

  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(apiUrl, publication);
  }

  updatePublication(id: any, publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(apiUrl + '/' + id, publication);
  }

  deletePublication(id: any): Observable<Publication> {
    return this.http.delete<Publication>(apiUrl + '/' + id);
  }
}

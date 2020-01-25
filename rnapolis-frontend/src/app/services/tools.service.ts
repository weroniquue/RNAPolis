import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tool} from '../entity/tool';
import {environment} from '../../environments/environment';

const apiUrl = `${environment.apiUrl}/api/tools`;
console.log(apiUrl)
// const apiUrl = `${window.location.origin}/api/tools`;


@Injectable({providedIn: 'root'})
export class ToolsService {

  constructor(private http: HttpClient) {
  }

  getTools(): Observable<Tool[]> {
    console.log(apiUrl);
    return this.http.get<Tool[]>(apiUrl);
  }

  addTool(tool: Tool): Observable<Tool> {
    return this.http.post<Tool>(apiUrl, tool);
  }

  updateTool(id: any, tool: Tool): Observable<Tool> {
    return this.http.put<Tool>(apiUrl + '/' + id, tool);
  }

  deleteTool(id: any): Observable<Tool> {
    return this.http.delete<Tool>(apiUrl + '/' + id);
  }
}

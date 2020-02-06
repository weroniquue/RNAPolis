import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeamMember} from '../entity/team-member';
import {environment} from '../../environments/environment';

const apiUrl = `${environment.apiUrl}/api/team-members`;

@Injectable({providedIn: 'root'})
export class TeamMembersService {

  constructor(private http: HttpClient) {
  }

  getTeamMembers(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(apiUrl);
  }

  addTeamMember(teamMember: TeamMember): Observable<TeamMember> {
    return this.http.post<TeamMember>(apiUrl, teamMember);
  }

  updateTeamMember(id: any, teamMember: TeamMember): Observable<TeamMember> {
    return this.http.put<TeamMember>(apiUrl + '/' + id, teamMember);
  }

  updateTeamMembersOrder(teamMembers: TeamMember[]): Observable<TeamMember> {
    teamMembers.forEach((teamMember, idx) => teamMember.order = idx);
    return this.http.put<TeamMember>(apiUrl, teamMembers);
  }

  deleteTeamMember(id: any): Observable<TeamMember> {
    return this.http.delete<TeamMember>(apiUrl + '/' + id);
  }
}

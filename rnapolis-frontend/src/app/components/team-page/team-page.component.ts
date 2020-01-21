import {Component, OnInit} from '@angular/core';
import {TeamMember} from '../../entity/team-member';
import {ConfirmationDialogComponent} from '../basic-components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MemberManagerComponent} from './member-manager/member-manager.component';
import {AuthenticationService} from '../../services/authentication.service';
import Utils from '../../services/utils';
import {NotifierService} from 'angular-notifier';
import {TeamMembersService} from '../../services/team-members.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  teamMembers: TeamMember[];
  canEdit: boolean;
  notifier: NotifierService;

  constructor(public authenticationService: AuthenticationService,
              public dialog: MatDialog,
              public teamMembersService: TeamMembersService,
              private readonly notifierService: NotifierService) {

    this.canEdit = this.authenticationService.ifLogin;
    this.notifier = notifierService;
  }

  ngOnInit() {
    Utils.closeMenu();
    this.teamMembersService.getTeamMembers()
    .subscribe(teamMembers => {
      this.teamMembers = teamMembers;
    });
  }

  setDefaultImage(member: TeamMember) {
    member.imagePath = 'assets/not-found.jpg';
  }

  deleteElement(teamMember: TeamMember) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this member?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teamMembersService.deleteTeamMember(teamMember.id).subscribe(
          response => {
            this.teamMembers.splice(this.teamMembers.indexOf(teamMember), 1);
            this.notifier.notify('success', 'Successfully deleted a team member!');
          },
          error => {
            this.notifier.notify('error', 'Failed to delete a team member!');
          });
      }
    });
  }

  editElement(member: TeamMember) {
    const editDialogRef = this.openMemberDialog(member);
    editDialogRef.afterClosed().subscribe(result => {
      this.teamMembersService.updateTeamMember(result.id, result).subscribe(
        editedTeamMember => {
          this.teamMembers[this.teamMembers.indexOf(editedTeamMember)] = editedTeamMember;
          this.notifier.notify('success', 'Successfully edited a team member!');
        },
        error => {
          this.notifier.notify('error', 'Failed to edit a team member!');
        });
    });
  }

  addElement() {
    const addTeamMemberDialogRef = this.openMemberDialog({
      id: null,
      imagePath: '',
      name: '',
      surname: '',
      position: '',
      description: ''
    });
    addTeamMemberDialogRef.afterClosed().subscribe(newTeamMember => {
      if (newTeamMember != null) {
        this.teamMembersService.addTeamMember(newTeamMember).subscribe(
          createdTeamMember => {
            this.teamMembers.unshift(createdTeamMember);
            this.notifier.notify('success', 'Successfully added a team member!');
          },
          error => {
            this.notifier.notify('error', 'Failed to add a team member!');
          });
      }
    });
  }

  openMemberDialog(member: TeamMember) {
    return this.dialog.open(MemberManagerComponent, {
      disableClose: true,
      panelClass: 'form-dialog-container',
      width: '80vw',
      data: member
    });
  }
}

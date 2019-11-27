import {Component, OnInit, ViewChild, NgZone} from '@angular/core';
import {TeamMember} from '../../entity/TeamMember';
import {ConfirmationDialogComponent} from '../basic-components/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MemberManagerComponent} from './member-manager/member-manager.component';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  team: TeamMember[];
  canEdit: boolean;

  constructor(public dialog: MatDialog) {
    this.canEdit = true;
    this.team = [
      new TeamMember('Natalia', 'Łukasiewicz', 'student',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sunt nisi vitae et quia possimus unde tempora, sapiente rem',
        'assets/random-photo-2.jpg'),
      new TeamMember('Weronika', 'Orczyk', 'doktorant',
        'Nuancado suprenstreko antaŭpriskribo iel il, mis tohuo pleja iliard mo, fin ol numeralo finnlando mallongigoj. Povi povus',
        'assets/random-photo-3.jpg'),
      new TeamMember('Błażej', 'Piaskowski', 'profesor',
        'Лорем ипсум долор сит амет, идяуе тибияуе сингулис еос ут, дуо но алтера цивибус. Вереар мелиоре репудиаре ад меа, еам ад легере',
        null),
      new TeamMember('Jan', 'Kowalski', 'profesor',
        'シューリンガンのグーリンダイ、寿限無、寿限無。長久命の長助。水行末 雲来末 風来末、食う寝る処に住む処。やぶら小路の藪柑子。五劫の擦り切れ。水行末 雲来末 風来末。グーリンダイのポンポコピーのポンポコナーの。',
        'assets/random-photo-4.jpg'),
      new TeamMember('Anna', 'Nowak', 'magister',
        'Om ifi binom-li büdeds kanobs. Logonsös odalabon lü men, gö kil blunedolsöd klop temi. Tü dünanes olenükobs-li purgator güo. Lif',
        'assets/random-photo-10.jpg'),
      new TeamMember('Wojciech', 'Sipak', 'profesor',
        'Λορεμ ιπσθμ δολορ σιτ αμετ, προβο vιρτθτε ατ εοσ. Ναμ ιδ ηινc vιδερερ. Ετ vισ λεγιμθσ φαcιλισισ ελοqθεντιαμ. Ασσεντιορ',
        null)
    ];
  }

  ngOnInit() {
  }

  setDefaultImage(member: TeamMember) {
    member.imagePath = 'assets/not-found.jpg';
  }

  deleteElement(member: TeamMember) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: ['Are you sure?', 'Do you want to delete this member?']
    });

    confirmationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.team.splice(this.team.indexOf(member), 1);
        // TODO save data in db
      }
    });
  }

  editElement(award: TeamMember) {
    const editDialogRef = this.openMemberDialog(award);

    editDialogRef.afterClosed().subscribe(result => {
      // TODO save data in db
      this.team[this.team.indexOf(award)] = result;
    });
  }

  addElement() {
    const addTeamMemberDialogRef = this.openMemberDialog({
      imagePath: '',
      name: '',
      surname: '',
      position: '',
      description: ''
    });
    addTeamMemberDialogRef.afterClosed().subscribe(result => {
      // TODO save data in db
        this.team.unshift(result);
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

import {Component, OnInit, ViewChild, NgZone} from '@angular/core';
import {TeamMember} from '../../entity/TeamMember';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  team: TeamMember[];
  canEdit: boolean;

  constructor(private _ngZone: NgZone) {
    this.team = [
      new TeamMember('Natalia', 'Łukasiewicz', 'student',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sunt nisi vitae et quia possimus unde tempora, sapiente rem aliquid assumenda nostrum sint nulla aspernatur, molestias cum quae. Tempora, illo.',
        '../../../../assets/random-photo-2.jpg'),
      new TeamMember('Weronika', 'Orczyk', 'doktorant',
        'Nuancado suprenstreko antaŭpriskribo iel il, mis tohuo pleja iliard mo, fin ol numeralo finnlando mallongigoj. Povi povus artefarita nia no, sen ej ekesti neoficiala. Op hot mezurunuo mallongigo. Aj ruli mekao titolo esk, trafe frazelemento jes eg, gv deka laŭlonge kromakcento fin.\n',
        '../../../../assets/random-photo-3.jpg'),
      new TeamMember('Błażej', 'Piaskowski', 'profesor',
        'Лорем ипсум долор сит амет, идяуе тибияуе сингулис еос ут, дуо но алтера цивибус. Вереар мелиоре репудиаре ад меа, еам ад легере цотидиеяуе. Епицури рецусабо еффициенди меи цу, вел ат елитр сенсерит, еу елит малис долор еос. Меи дицта поссит дигниссим но, не вис аццусам инвидунт неглегентур. Убияуе мандамус медиоцритатем еи меа, цу меа тантас сенсибус репримияуе, симул вереар еа иус. Модус дефинитионем меи ид, еос еуисмод репримияуе не.',
        null),
      new TeamMember('Jan', 'Kowalski', 'profesor',
        'シューリンガンのグーリンダイ、寿限無、寿限無。長久命の長助。水行末 雲来末 風来末、食う寝る処に住む処。やぶら小路の藪柑子。五劫の擦り切れ。水行末 雲来末 風来末。グーリンダイのポンポコピーのポンポコナーの。',
        '../../../../assets/random-photo-4.jpg'),
      new TeamMember('Anna', 'Nowak', 'magister',
        'Om ifi binom-li büdeds kanobs. Logonsös odalabon lü men, gö kil blunedolsöd klop temi. Tü dünanes olenükobs-li purgator güo. Lif tö fulons mali opölükoms, löpo palovegivom polelifükom lü fut. Hog ud mastan neflenik taläntas.',
        '../../../../assets/random-photo.jpg'),
      new TeamMember('Wojciech', 'Sipak', 'profesor',
        'Λορεμ ιπσθμ δολορ σιτ αμετ, προβο vιρτθτε ατ εοσ. Ναμ ιδ ηινc vιδερερ. Ετ vισ λεγιμθσ φαcιλισισ ελοqθεντιαμ. Ασσεντιορ μεδιοcριτατεμ ετ σιτ, vιξ cθ σιντ νοστρθμ σενσεριτ.\n',
        null)
    ]
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
  }

  changeCanEdit() {
    this.canEdit = true;
  }

  save() {
    console.log(this.team);
    this.canEdit = false;
    // TODO save data in db
  }

  deleteElement(member: TeamMember) {
    this.team.splice(this.team.indexOf(member), 1);
    // TODO save data in db
  }

  addElement() {
    this.team.unshift(new TeamMember('', '', '', '', ''));
  }

  onChange(event, teamMember) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => teamMember.imagePath = reader.result;

      reader.readAsDataURL(file);
    }
  }
}

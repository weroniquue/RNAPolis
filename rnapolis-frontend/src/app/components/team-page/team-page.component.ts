import {Component, HostListener, OnInit} from '@angular/core';
import {TeamMember} from "../../entity/TeamMember";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  team: TeamMember[];

  constructor() {
    this.team = [
      new TeamMember('Natalia', 'Łukasiewicz', 'student', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sunt nisi vitae et quia possimus unde tempora, sapiente rem aliquid assumenda nostrum sint nulla aspernatur, molestias cum quae. Tempora, illo.', "../../../../assets/random-photo-2.jpg"),
      new TeamMember('Weronika', 'Orczyk', 'doktorant', 'Nuancado suprenstreko antaŭpriskribo iel il, mis tohuo pleja iliard mo, fin ol numeralo finnlando mallongigoj. Povi povus artefarita nia no, sen ej ekesti neoficiala. Op hot mezurunuo mallongigo. Aj ruli mekao titolo esk, trafe frazelemento jes eg, gv deka laŭlonge kromakcento fin.\n', "../../../../assets/random-photo-3.jpg"),
      new TeamMember('Błażej', 'Piaskowski', 'profesor', 'Лорем ипсум долор сит амет, идяуе тибияуе сингулис еос ут, дуо но алтера цивибус. Вереар мелиоре репудиаре ад меа, еам ад легере цотидиеяуе. Епицури рецусабо еффициенди меи цу, вел ат елитр сенсерит, еу елит малис долор еос. Меи дицта поссит дигниссим но, не вис аццусам инвидунт неглегентур. Убияуе мандамус медиоцритатем еи меа, цу меа тантас сенсибус репримияуе, симул вереар еа иус. Модус дефинитионем меи ид, еос еуисмод репримияуе не.', null),
      new TeamMember('Jan', 'Kowalski', 'profesor', 'シューリンガンのグーリンダイ、寿限無、寿限無。長久命の長助。水行末 雲来末 風来末、食う寝る処に住む処。やぶら小路の藪柑子。五劫の擦り切れ。水行末 雲来末 風来末。グーリンダイのポンポコピーのポンポコナーの。', "../../../../assets/random-photo-4.jpg"),
      new TeamMember('Anna', 'Nowak', 'magister', 'Om ifi binom-li büdeds kanobs. Logonsös odalabon lü men, gö kil blunedolsöd klop temi. Tü dünanes olenükobs-li purgator güo. Lif tö fulons mali opölükoms, löpo palovegivom polelifükom lü fut. Hog ud mastan neflenik taläntas.', "../../../../assets/random-photo.jpg"),
      new TeamMember('Wojciech', 'Sipak', 'profesor', 'Λορεμ ιπσθμ δολορ σιτ αμετ, προβο vιρτθτε ατ εοσ. Ναμ ιδ ηινc vιδερερ. Ετ vισ λεγιμθσ φαcιλισισ ελοqθεντιαμ. Ασσεντιορ μεδιοcριτατεμ ετ σιτ, vιξ cθ σιντ νοστρθμ σενσεριτ.\n', null)
    ]
  }

  ngOnInit() {
  }

  setDefaultImage(teamMember: TeamMember) {
    teamMember.imagePath = "../../../../assets/not-found.jpg"
  }

}

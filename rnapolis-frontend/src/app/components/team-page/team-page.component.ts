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
      new TeamMember('Natalia', 'Łukasiewicz', 'student', 'Jestę sobie studentem'),
      new TeamMember('Weronika', 'Orczyk', 'doktorant', 'Jestę sobie doktorem'),
      new TeamMember('Błażej', 'Piaskowski', 'profesor', 'Jestę sobie profesor'),
      new TeamMember('Jan', 'Kowalski', 'profesor', 'Jestę sobie profesor'),
      new TeamMember('Anna', 'Nowak', 'magister', 'Jestę sobie magister'),
      new TeamMember('Wojciech', 'Sipak', 'profesor', 'Jestę sobie profesor')
    ]
  }

  ngOnInit() {
    this.onScrollEvent()
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  @HostListener('window:reload', ['$event'])
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    document.querySelectorAll('.div').forEach(item => {
      function isInViewport(element: Element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0
          && rect.left >= 0
          && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });
  }

}

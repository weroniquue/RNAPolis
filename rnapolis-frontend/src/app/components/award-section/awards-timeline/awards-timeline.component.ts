import {Component, HostListener, OnInit} from '@angular/core';
import {Award} from '../../../entity/award';

@Component({
  selector: 'app-awards-timeline',
  templateUrl: './awards-timeline.component.html',
  styleUrls: ['./awards-timeline.component.scss']
})
export class AwardsTimelineComponent implements OnInit {
  awards: Award[];

  constructor() {
    this.awards = [new Award(2017, 'opis'), new Award(2017, 'opis')];
  }

  ngOnInit() {
    this.onScrollEvent();
  }

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    document.querySelectorAll('#timeline li').forEach(item => {
      function isInViewport(element: Element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });
  }
}


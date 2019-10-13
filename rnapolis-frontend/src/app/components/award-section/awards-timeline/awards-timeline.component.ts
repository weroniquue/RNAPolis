import {Component, HostListener, OnInit} from '@angular/core';
import {Award} from '../../../entity/award';

@Component({
  selector: 'app-awards-timeline',
  templateUrl: './awards-timeline.component.html',
  styleUrls: ['./awards-timeline.component.scss']
})
export class AwardsTimelineComponent implements OnInit {
  awards: Award[];
  canEdit: boolean;

  constructor() {
    this.canEdit = false;
    this.awards = [new Award(2019, 'Rector scientific award for "New computational methods in RNA structural bioinformatics" granted to Marta Szachniuk, Maciej Antczak and Tomasz Zok by the Rector of Poznan University of Technology '),
      new Award(2019, 'Scientific award of "Polityka" journal granted to Maciej Antczak for outstanding achievements in the field of technical sciences '),
      new Award(2019, 'Award for PhD thesis "Algorithmic aspects of RNA structure similarity analysis" written by Tomasz Zok, awarded by the Scientific Council of the Faculty of Computing, Poznan University of Technology '),
      new Award(2019, 'Award for outstanding PhD thesis granted to Tomasz Zok for PhD thesis "Algorithmic Aspects of RNA Structure Similarity Analysis" by the City of Poznan '),
      new Award(2018, 'Scientific Award of the IBCh PAS Research Council for pseudoknot-annotating algorithms selected the best experimental work of the year 2018 (to Marta Szachniuk, Mariusz Popenda, Ryszard W. Adamiak)')];
  }


  ngOnInit() {
    this.onScrollEvent();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  @HostListener('window:reload', ['$event'])
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

  changeCanEdit() {
    this.canEdit = true;
  }

  save() {
    console.log(this.awards);
    this.canEdit = false;
  }

  deleteElement(award: Award) {
    this.awards.splice(this.awards.indexOf(award), 1);
  }

  addAward() {
    this.awards.push(new Award(new Date().getFullYear(), ''));
    const timelineId = document.getElementById('timeline');
    timelineId.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
  }
}


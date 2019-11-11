import {Component, HostListener, OnInit} from '@angular/core';
import {Award} from '../../entity/award';
import {yearsPerPage} from '@angular/material';

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
    this.awards = [{year: 2019,
      description: 'Rector scientific award for ' +
      '"New computational methods in RNA structural bioinformatics" granted to Marta Szachniuk,' +
      ' Maciej Antczak and Tomasz Zok by the Rector of Poznan University of Technology '},
      {year: 2019, description: 'Scientific award of "Polityka" journal granted to ' +
        'Maciej Antczak for outstanding achievements in the field of technical sciences '},
      {year: 2019, description: 'Award for PhD thesis "Algorithmic aspects of RNA structure ' +
        'similarity analysis" written by Tomasz Zok, awarded by the Scientific Council of the ' +
        'Faculty of Computing, Poznan University of Technology '},
      {year: 2019, description: 'Award for outstanding PhD thesis granted to ' +
        'Tomasz Zok for PhD thesis "Algorithmic Aspects of RNA Structure Similarity Analysis" by the City of Poznan '},
      {year: 2018, description: 'Scientific Award of the IBCh PAS Research ' +
        'Council for pseudoknot-annotating algorithms selected the best experimental work of the year 2018 ' +
        '(to Marta Szachniuk, Mariusz Popenda, Ryszard W. Adamiak)'},
      {year: 2018, description: 'Scholarship of the Minister of Science and Higher' +
        ' Education, Poland for outstanding scientific achievements in ' +
        'structural bioinformatics granted to Michal Zurkowski'},
      {year: 2017, description: 'Award for outstanding scientific ' +
        'achievements (Computational methods to recognize and ' +
        'model RNA 3D structures) granted to Marta Szachniuk by ' +
        'the Polish Academy of Sciences - Division IV. Technical Sciences '},
      {year: 2016, description: 'Scientific award for outstanding ' +
        'scientific achievements in structural bioinformatics ' +
        'granted to M. Szachniuk by the Rector of ' +
        'Poznan University of Technology'},
      {year: 2016, description: 'Scientific scholarship for outstanding ' +
        'research achievements in the field of RNA structural bioinformatics' +
        ' granted to Tomasz Zok by Chapter of the scholarship of the City of Poznan '},
      {year: 2013, description: 'RNA FRABASE announced one of ten most ' +
        'outstanding achievements in the Department of Computing, ' +
        'Poznan University of Technology'},
      {year: 2012, description: 'Award for the best master thesis ' +
        'presented in the field of bioinformatics granted to Tomasz Zok ' +
        'for MSc thesis "Molecular structure comparison in torsional angle space" ' +
        'by the Polish Bioinformatics Society'},
      {year: 2012, description: 'Scientific Award of the IBCh PAS Research Council ' +
        'for RNAComposer selected the best experimental work of the ' +
        'year 2012 (to Marta Szachniuk, Mariusz Popenda, Piotr Lukasiak, ' +
        'Jacek Blazewicz, Ryszard W. Adamiak)'},
      {year: 2009, description: 'Award for the best master thesis presented in ' +
        'the field of bioinformatics granted to Marek Blazewicz' +
        ' for MSc thesis "RNA fragments search engine - project and implementation" ' +
        'by the Polish Bioinformatics Society '},
      {year: 2008, description: 'Scientific Award of the IBCh PAS Research ' +
        'Council for RNA FRABASE selected the best experimental work of the ' +
        'year 2008 (to Marta Szachniuk, Mariusz Popenda, Ryszard W. Adamiak)'}
    ];
  }

  ngOnInit() {
    this.onScrollEvent();
  }

  @HostListener('window:resize', [])
  @HostListener('window:load', [])
  @HostListener('window:reload', [])
  @HostListener('window:scroll', []) onScrollEvent() {
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
    // TODO save data in db
  }

  deleteElement(award: Award) {
    this.awards.splice(this.awards.indexOf(award), 1);
    // TODO save data in db
  }

  addAward() {
    this.awards.push({year: new Date().getFullYear(), description: ''});
    const timelineId = document.getElementById('timeline');
    timelineId.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
  }
}


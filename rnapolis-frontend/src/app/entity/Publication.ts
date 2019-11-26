export class Publication {
  authors: string;
  title: string;
  journal: string;
  volume_issue: string
  year: number;
  pages: string;


  constructor(authors: string, title: string, journal: string, volume_issue: string, year: number, pages: string) {
    this.authors = authors;
    this.title = title;
    this.journal = journal;
    this.volume_issue = volume_issue;
    this.year = year;
    this.pages = pages;
  }
}

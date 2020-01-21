export class Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  volumeIssue: string;
  year: number;
  pages: string;


  constructor(authors: string, title: string, journal: string, volumeIssue: string, year: number, pages: string) {
    this.authors = authors;
    this.title = title;
    this.journal = journal;
    this.volumeIssue = volumeIssue;
    this.year = year;
    this.pages = pages;
  }
}

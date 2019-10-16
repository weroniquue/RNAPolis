export class TeamMember {
  name: string;
  surname: string;
  position: string;
  description: string;
  imagePath: string;

  constructor(name: string, surname: string, position: string, description: string, image: string){
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.description = description;
    this.imagePath = image;
  }
}

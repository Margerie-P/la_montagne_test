export class Article {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  dateCreate: Date;
  constructor(id = null, titre = null, contenu = null, image = null, date = null) {
    this.id = id;
    this.titre = titre;
    this.image = image;
    this.contenu = contenu;
    this.dateCreate = date;
  }
}

export class Card {
  name: string;
  url: string;
  date: Date;
  likes: number;
  dislikes: number;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
    this.date = new Date();
    this.likes = 0;
    this.dislikes = 0;
  }

  setLikes(likes: number) {
    if (likes > 5) {
      this.likes = 5;
    } else {
      this.likes = likes;
    }
  }
}

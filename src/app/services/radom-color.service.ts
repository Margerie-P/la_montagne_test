import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadomColorService {
  colors: string[];
  constructor() {
    this.colors = [ 'blue', 'orange', 'green', 'purple'];
  }

  changeColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

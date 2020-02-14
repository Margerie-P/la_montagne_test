import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  message: string;
  faHome = faHome;
  constructor() {
  }

  ngOnInit() {
    this.message = 'Bonjour';
  }

  logEvent(menuItem: string): void {
    console.log('l\'utilisateur à cliqué sur ' + menuItem);
  }

}

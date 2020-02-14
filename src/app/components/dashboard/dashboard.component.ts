import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {RadomColorService} from '../../services/radom-color.service';
import {ArticleService} from '../../services/article.service';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  btnClicked = false;
  favoriTeam = 'ASM';
  classement = ['ASM', 'Perpignan', 'Toulon'];
  articles: Article[];
  nbClick = 0;
  color: string;
  isLoading: boolean;
  faSpinner = faSpinner;
  constructor(private articleService: ArticleService) {
    // ici je n'appel plus mon service
  }


  ngOnInit() {
    /* J'initialise le chargement à true
    car on va demander une ressource à notre serveur après */
    this.isLoading = true;
    /* Je demande à mon service d'aller chercher toutes les ressources articles */
    this.articleService.getAllArticles().subscribe((data: Article[]) => {
       /* Quand mon serveur m'aura répondu je dit à mon composant que la liste d'articles
      sera égale à la réponse de mon serveur */
      this.articles = data;
      // on arrete le chargement car les données sont initialisées
      this.isLoading = false;
    });
  }

  changeBtnClicked() {
    this.btnClicked = !this.btnClicked;
  }
  voteDashboard($event) {
    this.nbClick += 1;
  }

}

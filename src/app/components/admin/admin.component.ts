import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[];
  faEdit = faEdit;
  faTrash = faTrash;
  isLoading: boolean;
  constructor(private articleService: ArticleService,
              private toastrService: ToastrService) { }

  ngOnInit() {
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

  deleteArticle(article) {
    this.articles = this.articleService.deleteArticle(article);
    this.toastrService.success('Félicitation',
      'Article supprimé avec succès', {closeButton: true,
        positionClass: 'toast-bottom-full-width', progressBar: true});
  }

}

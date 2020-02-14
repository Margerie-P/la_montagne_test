import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  faSpinner = faSpinner; 
  article: Article;
  isLoading: boolean;
  // Activated route permet de reccupérer les informations
  // de la requête de la page à afficher
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    return this.articleService.getArticleById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Article) => {
     this.article = data;
     this.isLoading = false;
   });

  }

  redirectHome() {
    this.router.navigate(['/home']);
  }

}

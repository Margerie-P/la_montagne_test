import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.articles;
  }

  ngOnInit() {
  }

}

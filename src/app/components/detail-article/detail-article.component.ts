import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../../models/article';
import {RadomColorService} from '../../services/radom-color.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() otherVar: string;
  @Output() voteEmitter: EventEmitter<Article> = new EventEmitter<Article>();
  color: string;

  constructor() { }

  ngOnInit() {
  }

  voteDetailArticle() {
    this.voteEmitter.emit(this.article);
  }

}

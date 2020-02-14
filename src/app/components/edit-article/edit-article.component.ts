import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  articleForm: Article;
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
   
  }

  onSubmit() {
    this.articleService.edit(this.articleForm);
    this.toastrService.info('Félicitation',
      'Article modifié avec succès', {closeButton: true,
        positionClass: 'toast-bottom-full-width', progressBar: true});
    this.router.navigate(['/admin']);
  }
}

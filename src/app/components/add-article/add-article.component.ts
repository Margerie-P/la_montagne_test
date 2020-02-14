import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: Article;
  constructor(private articleService: ArticleService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.articleForm = new Article();
  }

  logValue() {
    console.log(this.articleForm);
  }

  onSubmit() {
    this.articleService.add(this.articleForm).subscribe(data => {
       this.toastrService.success('Félicitation',
      'Article ajouté avec succès', {closeButton: true,
        positionClass: 'toast-bottom-full-width', progressBar: true});
    this.router.navigate(['/admin']);
    } )
   
  }

}

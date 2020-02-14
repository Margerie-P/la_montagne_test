import { Injectable } from '@angular/core';
import {Article} from '../models/article';
import {Observable, throwError} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  // L'url qui gere les ressources de type article
  apiUrl = 'http://localhost:3000/article';
  // J'injecte le service Angular HttpClient
  constructor(private httpClient: HttpClient) {
  }

  // Ma fonction get all articles retournera ma liste d'articles
  // Etant donnée que le serveur peut mettre du temps à répondre,
  // il retournera une Observable de type Article’[]
  getAllArticles(): Observable<Article[]> {
    // J'effectue une requête de type get sur le serveur
    // Si il y a un echec, je réessaie puis je traite l'erreur
    return this.httpClient.get<Article[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );

  }

  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  add(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.apiUrl, article).pipe(retry(1), catchError(this.handleError));
  }
  edit(articleToEdit: Article): void {
    this.articles
      .filter(
        article => article.id === articleToEdit.id)[0] = articleToEdit;
  }

  deleteArticle(article: Article): Article[] {
    this.articles = this.articles
      .filter(articleToDelete =>
        articleToDelete !== article);
    return this.articles;
  }

  // Méthode qui est appelée quand on a une erreur
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

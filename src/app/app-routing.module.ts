import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ALaUneComponent} from './components/a-la-une/a-la-une.component';
import {VieLocaleComponent} from './components/vie-locale/vie-locale.component';
import {SportsComponent} from './components/sports/sports.component';
import {LoisirsComponent} from './components/loisirs/loisirs.component';
import {FullArticleComponent} from './components/full-article/full-article.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddArticleComponent} from './components/add-article/add-article.component';
import {EditArticleComponent} from './components/edit-article/edit-article.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',      component: DashboardComponent },
  { path: 'a-la-une',      component: ALaUneComponent },
  { path: 'vie-locale',      component: VieLocaleComponent },
  { path: 'sports',      component: SportsComponent },
  { path: 'loisirs',      component: LoisirsComponent },
  { path: 'article/:id',      component: FullArticleComponent },
  { path: 'article/add',      component: FullArticleComponent },
  { path: 'admin/article/ajout',      component: AddArticleComponent },
  { path: 'admin/article/edit/:id',      component: EditArticleComponent },
  { path: 'admin',      component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

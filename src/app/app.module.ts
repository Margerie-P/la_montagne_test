import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstCharPipePipe } from './pipes/first-char-pipe.pipe';
import { TotoPipe } from './pipes/toto.pipe';
import { ALaUneComponent } from './components/a-la-une/a-la-une.component';
import { VieLocaleComponent } from './components/vie-locale/vie-locale.component';
import { SportsComponent } from './components/sports/sports.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import {FormsModule} from '@angular/forms';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import {ToastrModule} from 'ngx-toastr';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { LogPipe } from './pipes/log.pipe';
import {NgModule} from '@angular/core';
// Import de HttpClientModule depuis '@angular/common/http'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DetailArticleComponent,
    FirstCharPipePipe,
    TotoPipe,
    ALaUneComponent,
    VieLocaleComponent,
    SportsComponent,
    LoisirsComponent,
    FullArticleComponent,
    AdminComponent,
    AddArticleComponent,
    NumbersOnlyDirective,
    EditArticleComponent,
    LogPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule // import de HttpClient pour pouvoir faire des requêtes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

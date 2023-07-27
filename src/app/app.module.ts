import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderApresentationComponent } from './header-apresentation/header-apresentation.component';
import { ContentBlogComponent } from './content-blog/content-blog.component';
import { ContentArticleComponent } from './content-article/content-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HeaderApresentationComponent,
    ContentBlogComponent,
    ContentArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

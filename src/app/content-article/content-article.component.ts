import { Component } from '@angular/core';

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.css']
})
export class ContentArticleComponent {
  articles = [
    {
      title: "5 dicas para sua carreira profissional 1",
      previewText: "Confira algumas dicas que podem alavancar sua carreira como desenvolvedor frontend"
    },
    {
      title: "5 dicas para sua carreira profissional 2",
      previewText: "Confira algumas dicas que podem alavancar sua carreira como desenvolvedor frontend"
    },
    {
      title: "5 dicas para sua carreira profissional 3",
      previewText: "Confira algumas dicas que podem alavancar sua carreira como desenvolvedor frontend"
    }
  ];
}
